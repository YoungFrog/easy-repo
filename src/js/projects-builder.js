async function initProjectSBuilderButton(prefixFct, postfixFct, matriculesFct, accessLvlFct, logger, doneFct) {

    const projectBuilderButton = document.getElementById("project-builder-button");

    projectBuilderButton.addEventListener("click", 
        () => {
            const matriculesList = matriculesFct().value.split("\n");
            matriculesList.forEach(async matricule => {
                const name = `${prefixFct().value}${matricule}${postfixFct().value}`;
                const group = cleanGroupname();
                let project;

                try {
                    project = (await findProject(group, name)).id;
                    logger(name, "project-finded");
                } catch(error) {
                    project = await createProject(group, name);
                    logger(name, "project-created");
                }

                try {
                    await addMember(project, matricule, accessLvlFct());
                    logger(name, "member-ok");
                } catch(error) {
                    log(`error with member ${matricule}`);
                    logger(name, "member-nok");
                } finally {
                    doneFct(name);
                }
            });
        }
    );
}
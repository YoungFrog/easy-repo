function refreshForm() {
    [...document.getElementsByClassName("info")]
        .forEach(e => e.classList.add("hidden"));
    [...document.getElementsByTagName("input")]
        .forEach(e => e.classList.remove(...errorClasses));
}

function display(element) {
    element.classList.remove("hidden");
}

function displayError(blockID) {
    const input = document.querySelector(`#${blockID} input`);
    input.classList.add(...errorClasses);
    const errorMessage = document.querySelector(`#${blockID} p`);
    display(errorMessage);
}

function handleNetworkError() {
    display(document.getElementById("network-message"));
}

function tracker(track) {
    return (name, type) => {
        if (track.has(name)) {
            track.get(name).push(type);
        } else {
            track.set(name, [type]);
        }
    }
}

function projectCreatedLogFunction(track) {
    return (name) => {
        const newProject = document.createElement("div");
        newProject.classList.add(..."bg-green-300 rounded-xl px-5 py-2 flex".split(" "));
        
        const elementName = document.createElement("span");
        elementName.classList.add("basis-1/5");
        elementName.innerText = name;
        newProject.append(elementName);
        
        track.get(name).forEach(badge => {
            const badgeElement = document.createElement("span");
            badgeElement.classList.add(..."basis-2/5 text-sm font-medium mr-2 px-2.5 py-0.5 rounded flex justify-center".split(" "));
            switch(badge) {
                case "member-ok":
                    badgeElement.innerText = "membre ajouté";
                    badgeElement.classList.add(..."bg-green-100 text-green-800".split(" "));
                    break;
                case "member-nok":
                    badgeElement.innerText = "membre inexistant";
                    badgeElement.classList.add(..."bg-orange-800 text-orange-100".split(" "));
                    break;
                case "project-created":
                    badgeElement.innerText = "projet créé";
                    badgeElement.classList.add(..."bg-green-800 text-green-100".split(" "));
                    break;
                case "project-finded":
                    badgeElement.classList.add(..."bg-sky-800 text-sky-100".split(" "));
                    badgeElement.innerText = "projet retrouvé"
                    break;
            }
            newProject.append(badgeElement);
        });
        const logBox = document.getElementById("log-box");
        logBox.append(newProject);
    }
}

async function searchUser(username) {
    const requestPathname = "/users";
  
    const url = requestURL(requestPathname);
    url.searchParams.set("username", username);
    const request = new Request(url, getInit("GET"));

    try {
        const response = await fetch(request);
        const data = await response.json();
        return data[0];
    } catch(error) {
        console.error(`error : ${error}`);
    }
}

// TODO Créer fonction Rechercher member d'un projet

async function addMember(projectId, username, lvl) {
    log(`Ajout du membre ${username} en tant que : ${lvl}`);
    const userId = (await searchUser(username)).id;
    const requestPathname = `/projects/${projectId}/members`;
    const url = requestURL(requestPathname);

    console.log("access lvl" + lvl);
    const attributs = {
        user_id: userId,
        access_level: lvl,
    };

    const request = new Request(
        url, 
        getInit("POST", attributs)
    );

    fetch(request)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

/*
    //Exemple
searchUser(54895)
    .then( user => {
        console.log("\n\t ########  user  ########")
        console.log(user)
});
*/
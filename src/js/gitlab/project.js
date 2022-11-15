async function createProject(path, name) {
    const parentId = await getGroupID(path);
    console.log(parentId);
    const requestPathname = "/projects";
    const url = requestURL(requestPathname);

    const attributs = {
        name: name,
        path: name, // ce qui est ajouté au path parent => nom du projet
        "namespace_id":parentId
    };


    const init = getInit("POST", attributs);
    console.log(init);
    const request = new Request(url, init);
    
    const response = await fetch(request);
    
    return (await response.json()).id;
}

async function findProject(path, name) {
    const groupId = await getGroupID(path);

    const requestPathname = `/groups/${groupId}/search`;
    const url = requestURL(requestPathname)
    url.searchParams.set("scope", "projects");
    url.searchParams.set("search", name);

    const request = new Request(url, getInit("GET"));

    log(`Recherche du projet : ${path}/${name}`);

    const response = await fetch(request);
    const data = await response.json();
    
    if (data.length == 0) {
        throw new Error("Project not found");
    }
    
    return data[0];
}
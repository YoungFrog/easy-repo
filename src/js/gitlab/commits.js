async function commitsDesc(projectId) {
    const requestPathname = `/projects/${projectId}/repository/commits`;

    const request = new Request(requestURL(requestPathname), MY_INIT);
    const response = await fetch(request);
    
    if (!response.ok) {
        throw `Error with project ${projectId}`;
    }

    return await response.json();
}

/*
    //Exemple
commitsDesc(23120)
    .then( commits => {
        console.log("\n\t ########  commit  ########")
        commits.forEach(e => console.log(e.message))
    }
);
*/

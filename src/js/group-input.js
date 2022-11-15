const GROUPNAME_INPUT_EID = "group-input";
const GROUPNAME_ID_EID = "group-id";

function handleGroupNotFound() {
    groupnameElement().focus();
    displayError("group-block");
}

function groupnameElement() {
    return document.getElementById(GROUPNAME_INPUT_EID);
}

function groupnameIDElement() {
    return document.getElementById(GROUPNAME_ID_EID);
}

function cleanGroupname() {
    const groupname = groupnameElement().value;
    const cleanedGroupname = groupname
        .replace(/\s/g,"") // remove spaces
        .replace(/\/$/, "") // remove trailing /
        .replace(/^\//, ""); // remove first /

    groupnameElement().value = cleanedGroupname;
    return cleanedGroupname;
}

function checkGroup() {
    refreshForm();

    if (isFilledToken()) {
        const groupname = cleanGroupname();

        searchGroup(groupname)
            .then(g => {
                groupnameIDElement().textContent = g.id
                display(groupnameIDElement());
            })
            .catch(error => {
                switch(error.message) {
                    case "NetworkError when attempting to fetch resource.": 
                        handleNetworkError();
                        break;
                    case "Group not found":
                        handleGroupNotFound();
                        break;
                    default:
                        console.log(error.message);
                        handleTokenError();       
                }
            });
    }
}

function initGroupnameInput() {
    groupnameElement().addEventListener("focusout", checkGroup);
}

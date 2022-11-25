const HOSTNAME = "https://git.esi-bru.be";
const API_PATHNAME = "api/v4";

function requestURL(requestPathname) {
    return new URL(
        `${API_PATHNAME}${requestPathname}`,
        HOSTNAME
        );
}

function getHeader() {
    return new Headers({
        'Authorization': "Bearer " + getToken(),
        'Content-Type': 'application/json',
    });
}

function getInit(method, attributs=undefined) {
    switch(method) {
        case 'GET':
            return {
                method: 'GET',
                headers: getHeader(),
            }
        case 'POST':
            return {
                method: 'POST',
                headers: getHeader(),
                body: JSON.stringify(attributs),
            };
        default:
            throw new Error("method arg must be GET or POST");
    }
}

// Tracking

const enableLog = true;

const log = (message) => {
    if (enableLog) {
        console.log(message);
    }
}
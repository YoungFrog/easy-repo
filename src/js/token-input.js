function handleTokenError() {
    const input = document.querySelector("#token-block input");
    input.focus();
    displayError("token-block");
}

function tokenElement() {
    return document.getElementById("token-input");
}

function getToken() {
    return tokenElement().value;
}

function isFilledToken() {
    if (!getToken()) {
        handleTokenError();
    }

    return true;
}

function initTokenInput() {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
        tokenElement().value = storedToken;
    } else {
        document.getElementById("login-block").classList.remove("hidden")
    }

}
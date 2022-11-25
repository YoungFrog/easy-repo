function urlWithParams(url, params) {
    return params ? `${url}?${new URLSearchParams(params)}` : url;
}

// from MDN https://github.com/curityio/pkce-javascript-example
async function hashFromString(codeVerifier) {
    var digest = await crypto.subtle.digest("SHA-256",
        new TextEncoder().encode(codeVerifier));

    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

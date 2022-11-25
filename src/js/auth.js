async function request_code() {

    let state = crypto.randomUUID();
    let code_verifier = crypto.randomUUID();

    localStorage.setItem('code_verifier', code_verifier)
    sessionStorage.setItem('state', state)

    document.location = urlWithParams(url_for_code, {
        client_id,
        redirect_uri,
        response_type: "code",
        state,
        scope: 'api',
        code_challenge: await hashFromString(code_verifier),
        code_challenge_method: 'S256'
    })
}

const redirect_uri = new URL("auth_cb.html", document.location) // must also be whitelisted in gitlab
const main_uri = new URL("index.html", document.location)

const config = {
    esi: {
        client_id: '9cc3cb2a083854fc0b7077b0c8959201bb87684938c76d1e10f0b818e833071c',
        base_url: 'https://git.esi-bru.be'
    },
    gitlab: {
        client_id: '5e9fa44e262f6f80bc00b031d7e5b70ab236f92b437e4bae4874c633e3fc1fa4',
        base_url: 'https://gitlab.com'
    }
}

const { base_url, client_id } = config['esi']

const url_for_code = `${base_url}/oauth/authorize`
const url_for_token = `${base_url}/oauth/token`

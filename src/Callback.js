import React, { useEffect } from 'react'
import axios from 'axios'
import qs from 'querystring'

const Callback = ({ history }) => {
    const url_string = window.location.href
    const url = new URL(url_string)
    const code = url.searchParams.get('code')

    useEffect(() => {
        axios
            .post(
                `https://webapi.developers.erstegroup.com/api/csas/sandbox/v1/sandbox-idp/token`,
                qs.stringify({
                    grant_type: 'authorization_code',
                    code,
                    client_id: '26d56c85-7411-435b-ad48-05601ab05767',
                    client_secret: '01e3ef0d-b348-4e79-9377-ac9e9eb2af39',
                    redirect_uri: 'http://localhost:3000/callback',
                }),
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                    },
                },
            )
            .then(({ data }) => {
                localStorage.setItem('ACCESS_TOKEN', data.access_token)
                localStorage.setItem('REFRESH_TOKEN', data.refresh_token)

                history.push('/welcome')
            })
    }, [code, history])

    return <div>Loading...</div>
}

export default Callback

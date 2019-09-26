import React, { useEffect } from 'react'
import Logo from './Logo'
import Screen from './Screen'
import axios from 'axios'
import qs from 'querystring'

const Callback = ({ history }) => {
    const url_string = window.location.href
    const url = new URL(url_string)
    const code = url.searchParams.get('code')

    useEffect(() => {
        console.log('Asking to access token')
        axios
            .post(
                `https://webapi.developers.erstegroup.com/api/csas/sandbox/v1/sandbox-idp/token`,
                qs.stringify({
                    grant_type: 'authorization_code',
                    code,
                    client_id: '26d56c85-7411-435b-ad48-05601ab05767',
                    client_secret: '508689f9-b2fa-40ba-93b6-45a09a3c3475',
                    redirect_uri: 'http://localhost:3000/callback',
                }),
                {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                    },
                },
            )
            .then(({ data }) => {
                console.log('Access token obtained')
                console.log('Refresh token obtained')
                localStorage.setItem('ACCESS_TOKEN', data.access_token)
                localStorage.setItem('REFRESH_TOKEN', data.refresh_token)

                history.push('/goals')
            })
    }, [code, history])

    return (
        <Screen>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Logo />
            </div>
        </Screen>
    )
}

export default Callback

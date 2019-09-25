import React from 'react'
import Screen from './Screen'
import avatar from './sitting-4.svg'

const OAUTH_URL = `https://webapi.developers.erstegroup.com/api/csas/sandbox/v1/sandbox-idp/auth?redirect_uri=http://localhost:3000/callback&client_id=26d56c85-7411-435b-ad48-05601ab05767&response_type=code&access_type=offline&state=someValue&scope=peract`

function Home() {
    return (
        <Screen>
            <img src={avatar} alt="" />
            <h1>
                Are you ready to achieve your <em>dreams</em>?
            </h1>
            <div>
                <a href={OAUTH_URL}>Yes, connect my bank</a>
            </div>
            <div>
                <a href={OAUTH_URL}>No, I want to stay poor forever</a>
            </div>
        </Screen>
    )
}

export default Home

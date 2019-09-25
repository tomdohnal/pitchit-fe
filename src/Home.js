import React from 'react'
import Screen from './Screen'
import Button from './Button'
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
                <Button>Yes, connect my bank</Button>
            </div>
            <div>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 16,
                        color: '#7B8794',
                    }}
                >
                    No, I want to stay poor forever
                </div>
            </div>
        </Screen>
    )
}

export default Home

import React from 'react'

const OAUTH_URL = `https://webapi.developers.erstegroup.com/api/csas/sandbox/v1/sandbox-idp/auth?redirect_uri=http://localhost:3000/callback&client_id=26d56c85-7411-435b-ad48-05601ab05767&response_type=code&access_type=offline&state=someValue&scope=peract`

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <a href={OAUTH_URL}>Connect your bank</a>
        </div>
    )
}

export default Home

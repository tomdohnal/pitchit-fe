import React, { useEffect } from 'react'
import axios from 'axios'

const Welcome = () => {
    useEffect(() => {
        const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')

        axios
            .get(
                'https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v1/accounts/my/accounts',
                {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                        'web-api-key': '2f8d0e22-1c4f-41d5-a49d-94e145108da1',
                    },
                },
            )
            .then(({ data }) => {
                const accountId = data.accounts[0].id

                axios
                    .get(
                        `https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v1/accounts/my/accounts/${accountId}/transactions`,
                        {
                            headers: {
                                Authorization: `Bearer ${ACCESS_TOKEN}`,
                                'web-api-key':
                                    '2f8d0e22-1c4f-41d5-a49d-94e145108da1',
                            },
                        },
                    )
                    .then(({ data }) => {
                        console.log(data)
                    })
            })
    }, [])

    return <div>Welcome</div>
}

export default Welcome

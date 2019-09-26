import React, { useEffect } from 'react'
import Screen from './Screen'
import Button from './Button'
import css from './analysis.module.sass'
import img from './undraw_wallet_aym5.svg'
import { getNeedToSave,getCurrentlySaving } from './utils'

const Analysis = (props) => {
    useEffect(() => {
        console.log('Showing analysed data to the user...')
        setTimeout(() => {
            console.log('Waiting for user input...')
        }, 1000)
    }, [])

    return (
        <Screen>
            <div className={css.container}>
                <h1>Your Habits</h1>
                <div>
                    You spend{' '}
                    <span className={css.keyMetric}>
                        <span className={css.spent}>{getNeedToSave() * 17}€</span>/month
                    </span>
                </div>
                <div>
                    You save{' '}
                    <span className={css.keyMetric}>
                        <span className={css.saved}>{getCurrentlySaving()}€</span>/month
                    </span>
                </div>
                <img src={img} height="308" alt="" />
                <div className={css.goal}>
                    To achieve your <em>goal</em>, you need to save{' '}
                    <span className={css.keyMetric}>
                        <span className={css.saved}>{getNeedToSave()}€</span>
                        /month
                    </span>
                </div>
                <Button onClick={() => props.history.push('/save')}>Show me how</Button>
            </div>
        </Screen>
    )
}

export default Analysis

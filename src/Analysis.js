import React from 'react'
import Screen from './Screen'
import Button from './Button'
import css from './analysis.module.sass'
import img from './undraw_wallet_aym5.svg'

const Analysis = () => {
    return (
        <Screen>
            <div className={css.container}>
                <h1>Your Habits</h1>
                <div>
                    You spend{' '}
                    <span className={css.keyMetric}>
                        <span className={css.spent}>1447€</span>/month
                    </span>
                </div>
                <div>
                    You save{' '}
                    <span className={css.keyMetric}>
                        <span className={css.saved}>44€</span>/month
                    </span>
                </div>
                <img src={img} height="308" alt=""/>
                <div>
                    To achieve your <em>goal</em>, you need to save{' '}
                    <span className={css.keyMetric}>
                        <span className={css.saved}>89€</span>/month
                    </span>
                </div>
                <Button>Show me how</Button>
            </div>
        </Screen>
    )
}

export default Analysis

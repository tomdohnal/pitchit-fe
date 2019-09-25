import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import Button from './Button'
import Screen from './Screen'
import css from './Savings.module.sass'
import img from './undraw_make_it_rain_iwk4.svg'

const Savings = () => {
    const GOAL_AMOUNT = localStorage.getItem('GOAL_AMOUNT')
    const GOAL_DATE = localStorage.getItem('GOAL_DATE')
    const GOAL_CURRENT = GOAL_AMOUNT * 0.39
    const springProps = useSpring({
        from: { width: '0%' },
        to: { width: `${(GOAL_CURRENT / GOAL_AMOUNT) * 100}%` },
        config: config.slow,
        delay: 200,
    })

    return (
        <Screen>
            <div className={css.container}>
                <h1>0.18€ just added to your savings account!</h1>
                <img height={320} src={img} alt="" className={css.img} />
                <div className={css.progressContainer}>
                    <animated.div
                        style={springProps}
                        className={css.progress}
                    />
                    <span className={css.progressStart}>0€</span>
                    <animated.span className={css.progressPercentage}>
                        {springProps.width.interpolate(x => {
                            return `${parseInt(x, 10)}%`
                        })}
                    </animated.span>
                    <span className={css.progressEnd}>{GOAL_AMOUNT}€</span>
                </div>
                <div className={css.fullAmount}>
                    Full amount expected on {GOAL_DATE}
                </div>
                <Button>Cool, thanks!</Button>
            </div>
        </Screen>
    )
}

export default Savings

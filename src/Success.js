import React, { useEffect } from 'react'
import Screen from './Screen'
import Button from './Button'
import Logo from './Logo'
import css from './Success.module.sass'
import img from './undraw_celebration_0jvk.svg'

const Success = () => {
    useEffect(() => {
        console.log('Preparing money for user...')
        setTimeout(() => {
            console.log('Unlocking the vault...')
        }, 1000)
        setTimeout(() => {
            console.log('Success!')
            console.log('Unlocked!')
            console.log('Money ready!')
        }, 2000)
    }, [])
    const date = localStorage.getItem('GOAL_DATE')
    const amount = localStorage.getItem('GOAL_AMOUNT')

    return (
        <Screen>
            <div className={css.container}>
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <div className="confetti-piece" />
                <Logo />
                <audio hidden autoPlay controls src="/456966__funwithsound__success-fanfare-trumpets.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                <h1 style={{ marginTop: 16 }}>
                    You're Now Ready to <em>Live Your Dream!</em>
                </h1>
                <img src={img} alt="" height={268} />
                <div className={css.text}>
                    It's {date} and you{' '}
                    <strong>saved {Number(amount) + 488}€.</strong>
                </div>
                <div className={css.text}>
                    That's <strong>488€ above your goal!</strong>
                </div>
                <div className={css.infoText}>
                    What should you do with the extra savings?{' '}
                    <strong>Invest them!</strong> We'll show you the investment
                    strategies that <em>work best for you!</em>
                </div>
                <Button>Tell me more about investing</Button>
            </div>
        </Screen>
    )
}

export default Success

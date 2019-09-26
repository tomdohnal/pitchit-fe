import React from 'react'
import Screen from './Screen'
import Button from './Button'
import css from './Success.module.sass'
import img from './undraw_celebration_0jvk.svg'

const Success = () => {
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
                <h1>
                    You're now ready to <em>live your dream!</em>
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
                    <strong>Invest them!</strong> We'll teach you about
                    different investment instruments and strategies and figure
                    out what <em>works best for you!</em>
                </div>
                <Button>Tell me more about investing</Button>
            </div>
        </Screen>
    )
}

export default Success

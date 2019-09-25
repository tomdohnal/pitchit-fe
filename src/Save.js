import React, { useState } from 'react'
import Button from './Button'
import Screen from './Screen'
import AnimatedCheckBox from './AnimatedCheckBox'
import css from './Save.module.sass'

const PUBS_SPENDING = 388
const CIGARATTES_SPENDING = 74
const CURRENTLY_SAVING_INITIAL = 44
const NEED_TO_SAVE = 89

const Save = () => {
    const [saveOnPubs, setSaveOnPubs] = useState(false)
    const [saveOnCigs, setSaveOnCigs] = useState(false)
    const [saveOnNetflix, setSaveOnNetflix] = useState(false)
    const [saveOnHBO, setSaveOnHBO] = useState(false)

    let savedExtra = 0

    if (saveOnPubs) {
        savedExtra += PUBS_SPENDING * 0.10
    }

    if (saveOnCigs) {
        savedExtra += CIGARATTES_SPENDING * 0.10
    }

    if (saveOnNetflix) {
        savedExtra += 10
    }

    if (saveOnHBO) {
        savedExtra += 15
    }
    
    return (
        <Screen>
            <div className={css.save}>
                <h1>Save more money!</h1>
                <div className={css.infoText}>
                    Here are some of our suggestions on how to save more
                    money...
                </div>
                <div style={{ height: 16 }} />
                <div className={css.card}>
                    <h2>Pubs and Bars</h2>
                    <div className={css.infoText}>
                        You spend {PUBS_SPENDING}€/month on pubs and bars.
                        That's <em>waaay</em> too much!
                    </div>
                    <AnimatedCheckBox onCheck={() => {
                        setSaveOnPubs(prev => !prev)
                    }}>
                        Set aside 10% from those payments
                    </AnimatedCheckBox>
                </div>
                <div className={css.card}>
                    <h2>Cigarettes</h2>
                    <div className={css.infoText}>
                        You spend {CIGARATTES_SPENDING}€/month on cigarettes.
                        That's a <em>no-go</em> for your (financial) health!
                    </div>
                    <AnimatedCheckBox onCheck={() => {
                        setSaveOnCigs(prev => !prev)
                    }}>
                        Set aside 10% from those payments
                    </AnimatedCheckBox>
                </div>
                <div className={css.card}>
                    <h2>Subscriptions</h2>
                    <div className={css.infoText}>
                        You have <em>both</em> Netflix and HBO GO subscriptions.
                        Avoid money loss and procrastination and cancel (at
                        least) one of those.
                    </div>
                    <AnimatedCheckBox onCheck={() => {
                        setSaveOnNetflix(prev => !prev)
                    }}>
                        I've cancelled Netflix Subscription
                    </AnimatedCheckBox>
                    <AnimatedCheckBox onCheck={() => {
                        setSaveOnHBO(prev => !prev)
                    }}>
                        I've cancelled HBO GO Subscription
                    </AnimatedCheckBox>
                </div>
            </div>
            <div className={css.footer}>
                <div>
                    Currently saving: <span className={CURRENTLY_SAVING_INITIAL + savedExtra >= NEED_TO_SAVE ? css.success : css.fail}>{Number(CURRENTLY_SAVING_INITIAL + savedExtra).toFixed(0)}€</span>
                </div>
                <div>
                    Need to save: <span>{NEED_TO_SAVE}€</span>
                </div>
                <Button disabled={CURRENTLY_SAVING_INITIAL + savedExtra < NEED_TO_SAVE}>I'm ready to go!</Button>
            </div>
        </Screen>
    )
}

export default Save

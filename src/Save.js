import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { getNeedToSave, getCurrentlySaving } from './utils'
import Button from './Button'
import Screen from './Screen'
import AnimatedCheckBox from './AnimatedCheckBox'
import LogoImg from './LogoImg'
import css from './Save.module.sass'

const Save = () => {
    // console.log(())
    const [saveOnPubs, setSaveOnPubs] = useState(false)
    const [saveOnCigs, setSaveOnCigs] = useState(false)
    const [saveOnNetflix, setSaveOnNetflix] = useState(false)
    const [saveOnHBO, setSaveOnHBO] = useState(false)
    useEffect(() => {
        console.log('Showing tailor-made saving tips...')
    }, [])

    let savedExtra = 0

    const CURRENTLY_SAVING_INITIAL = getCurrentlySaving()
    const NEED_TO_SAVE = getNeedToSave()
    const PUBS_SPENDING = Math.ceil(getNeedToSave() * 3.87)
    const CIGARATTES_SPENDING = Math.ceil(getNeedToSave() * 1.57)

    if (saveOnPubs) {
        savedExtra += PUBS_SPENDING * 0.1
    }

    if (saveOnCigs) {
        savedExtra += CIGARATTES_SPENDING * 0.1
    }

    if (saveOnNetflix) {
        savedExtra += 10
    }

    if (saveOnHBO) {
        savedExtra += 15
    }

    return (
        <Screen>
            <Helmet>
                <title>Money Kitten | Saving Tips</title>
            </Helmet>
            <div className={css.save}>
                <div className={css.header}>
                    <h1>Save More Money!</h1>
                    <LogoImg />
                </div>
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
                    <AnimatedCheckBox
                        onCheck={() => {
                            if (!saveOnPubs) {
                                console.log('Pubs saving checked')
                            } else {
                                console.log(
                                    'Pubs saving unchecked. (NOT a good idea!)',
                                )
                            }
                            setSaveOnPubs(prev => !prev)
                        }}
                    >
                        Set aside 10% from those payments
                    </AnimatedCheckBox>
                </div>
                <div className={css.card}>
                    <h2>Cigarettes</h2>
                    <div className={css.infoText}>
                        You spend {CIGARATTES_SPENDING}€/month on cigarettes.
                        That's a <em>no-go</em> for your (financial) health!
                    </div>
                    <AnimatedCheckBox
                        onCheck={() => {
                            if (!saveOnCigs) {
                                console.log('Cigarettes saving checked')
                            } else {
                                console.log(
                                    'Cigarettes saving unchecked. (Really?! :(()))',
                                )
                            }
                            setSaveOnCigs(prev => !prev)
                        }}
                    >
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
                    <AnimatedCheckBox
                        onCheck={() => {
                            if (!saveOnNetflix) {
                                console.log('Netflix cancellation confirmed')
                            } else {
                                console.log('Netflix cancellation unconfirmed')
                            }
                            setSaveOnNetflix(prev => !prev)
                        }}
                    >
                        I've cancelled Netflix Subscription
                    </AnimatedCheckBox>
                    <AnimatedCheckBox
                        onCheck={() => {
                            if (!saveOnHBO) {
                                console.log('HBO GO cancellation confirmed')
                            } else {
                                console.log('HBO GO cancellation unconfirmed')
                            }
                            setSaveOnHBO(prev => !prev)
                        }}
                    >
                        I've cancelled HBO GO Subscription
                    </AnimatedCheckBox>
                </div>
            </div>
            <div className={css.footer}>
                <div>
                    Currently saving:{' '}
                    <span
                        className={
                            CURRENTLY_SAVING_INITIAL + savedExtra >=
                            NEED_TO_SAVE
                                ? css.success
                                : css.fail
                        }
                    >
                        {Number(CURRENTLY_SAVING_INITIAL + savedExtra).toFixed(
                            0,
                        )}
                        €
                    </span>
                </div>
                <div>
                    Need to save: <span>{NEED_TO_SAVE}€</span>
                </div>
                <Button
                    disabled={
                        CURRENTLY_SAVING_INITIAL + savedExtra < NEED_TO_SAVE
                    }
                >
                    I'm ready to go!
                </Button>
            </div>
        </Screen>
    )
}

export default Save

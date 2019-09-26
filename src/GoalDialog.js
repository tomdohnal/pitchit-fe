import React, { useState, useEffect, useRef } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import moment from 'moment'
import { useTransition, animated } from 'react-spring'
import Screen from './Screen'
import Button from './Button'
import 'react-infinite-calendar/styles.css' // Make sure to import the default stylesheet

import css from './GoalDialog.module.sass'

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = event => {
                // Do nothing if clicking ref's element or descendent elements
                if (
                    !ref.current ||
                    ref.current.contains(event.target) ||
                    !document.contains(event.target)
                ) {
                    return
                }

                handler(event)
            }

            document.addEventListener('click', listener)

            return () => {
                document.removeEventListener('click', listener)
            }
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler],
    )
}

const GoalDialog = props => {
    const [amount, setAmount] = useState(500)
    const [name, setName] = useState(props.name || '')
    useEffect(() => {
        if (props.name !== 'Other') {
            setName(props.name)
        }
    }, [props.name])
    const [date, setDate] = useState(null)
    const [showCalendar, setShowCalendar] = useState(null)
    const ref = useRef(null)
    useOnClickOutside(ref, () => {
        props.isOpen && props.onHide(false)
    })
    const transitions = useTransition(props.isOpen, null, {
        from: { opacity: 0, transform: 'translateY(10%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(10%)' },
    })

    return transitions.map(({ item, key, styleProps }) => {
        return (
            item && (
                <animated.div
                    key={key}
                    style={{ ...styleProps }}
                    ref={ref}
                    className={`${css.dialog}`}
                >
                    <Screen>
                        <h1>What? How much? When?</h1>
                        <div>
                            <label>Pick goal name</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={({ target: { value } }) => {
                                    setName(value)
                                }}
                            />
                        </div>
                        <div>
                            <label>Pick amount</label>
                        </div>
                        <div className={css.amount}>
                            <input
                                style={{ width: 158 }}
                                type="text"
                                value={amount}
                                onChange={({ target: { value } }) => {
                                    setAmount(value)
                                }}
                            />
                            <span className={css.eur}>€</span>
                        </div>
                        <div>
                            <label>Pick date</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                onClick={() => {
                                    setShowCalendar(true)
                                }}
                                style={{ textAlign: 'right', width: 212 }}
                                value={
                                    date && moment(date).format('DD/MM/YYYY')
                                }
                            />
                            {showCalendar && (
                                <InfiniteCalendar
                                    width={382}
                                    height={384}
                                    onSelect={value => {
                                        setDate(value)
                                        setShowCalendar(false)
                                    }}
                                />
                            )}
                        </div>
                        <hr />
                        <div className={css.buttonContainer}>
                            <Button
                                onClick={() => {
                                    localStorage.setItem('GOAL_AMOUNT', amount)
                                    localStorage.setItem(
                                        'GOAL_DATE',
                                        moment(date).format('DD/MM/YYYY'),
                                    )
                                    localStorage.setItem('GOAL_NAME', name)
                                    props.history.push('/analyzing')
                                }}
                            >
                                Let's go
                            </Button>
                        </div>
                    </Screen>
                </animated.div>
            )
        )
    })
}

export default GoalDialog

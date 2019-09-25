import React, { useState } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import Screen from './Screen'
import Button from './Button'
import moment from 'moment'
import 'react-infinite-calendar/styles.css' // Make sure to import the default stylesheet

import css from './GoalDialog.module.sass'

const GoalDialog = () => {
    const [amount, setAmount] = useState(500)
    const [name, setName] = useState('')
    const [date, setDate] = useState(null)
    const [showCalendar, setShowCalendar] = useState(null)

    return (
        <div className={`${css.dialog}`}>
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
                        style={{ width: 158}}
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
                        value={date && moment(date).format('DD/MM/YYYY')}
                    />
                    {showCalendar && (
                        <InfiniteCalendar
                            width={382}
                            height={384}
                            onSelect={value => {
                                setDate(value)
                                setShowCalendar(false)
                            }}
                            // selected={today}
                            // minDate={lastWeek}
                        />
                    )}
                </div>
                <hr/>
                <div className={css.buttonContainer}>
                    <Button>Let's go</Button>
                </div>
            </Screen>
        </div>
    )
}

export default GoalDialog

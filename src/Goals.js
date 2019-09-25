import React, { useState } from 'react'
import Button from './Button'
import GoalDialog from './GoalDialog'
import Screen from './Screen'

import css from './goals.module.sass'
import GoalButton from './GoalButton'

const Goals = () => {
    const [showDialog, setShowDialog] = useState(true)
    return (
        <Screen>
            <h1>Cool, now set a savings goal</h1>
            <div>
                <Button
                    onClick={() => {
                        setShowDialog(prev => !prev)
                    }}
                >
                    Boo
                </Button>
            </div>
            {showDialog && (
                <GoalDialog
                    onHide={() => {
                        setShowDialog(false)
                    }}
                />
            )}
            <div>
                <div className={css.goalButtonRow}>
                    <GoalButton>Travel</GoalButton>
                    <GoalButton>Gadget</GoalButton>
                </div>
                <div>
                    <GoalButton>Fashion</GoalButton>
                    <GoalButton>Car</GoalButton>
                </div>
            </div>
        </Screen>
    )
}

export default Goals

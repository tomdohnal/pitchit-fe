import React, { useState, useContext } from 'react'
import Button from './Button'
import GoalDialog from './GoalDialog'
import Screen from './Screen'
import FirebaseContext from './Firebase/context'

import css from './goals.module.sass'
import GoalButton from './GoalButton'


const Goals = () => {
    const [showDialog, setShowDialog] = useState(false)
    const firebase = useContext(FirebaseContext)
    return (
        <Screen>
            <h1>Cool, now set a savings goal</h1>
            <div>
                <Button
                    onClick={() => {
                        firebase.askForPermissioToReceiveNotifications()
                    }}
                >
                    Allow notifications
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

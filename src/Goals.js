import React, { useState, useContext, useEffect } from 'react'
import GoalDialog from './GoalDialog'
import Screen from './Screen'
import FirebaseContext from './Firebase/context'
import GoalButton from './GoalButton'

const Goals = () => {
    const [dialogName, setDialogName] = useState(null)
    const firebase = useContext(FirebaseContext)
    useEffect(() => {
        firebase.askForPermissioToReceiveNotifications()
    })

    return (
        <Screen>
            <h1>Cool, now set a savings goal</h1>
            <GoalDialog
                isOpen={!!dialogName}
                name={dialogName}
                onHide={() => {
                    setDialogName(null)
                }}
            />
            <div>
                <GoalButton
                    type="Travel"
                    onClick={() => {
                        setDialogName('Travel')
                    }}
                />
                <GoalButton
                    type="Gadget"
                    onClick={() => {
                        setDialogName('Gadget')
                    }}
                />
                <GoalButton
                    type="Fashion"
                    onClick={() => {
                        setDialogName('Fashion')
                    }}
                />
                <GoalButton
                    type="Car"
                    onClick={() => {
                        setDialogName('Car')
                    }}
                />
                <GoalButton
                    type="Other"
                    onClick={() => {
                        setDialogName('Other')
                    }}
                />
            </div>
        </Screen>
    )
}

export default Goals

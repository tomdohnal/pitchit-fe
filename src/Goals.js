import React, { useState, useContext, useEffect } from 'react'
import GoalDialog from './GoalDialog'
import Screen from './Screen'
import FirebaseContext from './Firebase/context'
import GoalButton from './GoalButton'

const Goals = (props) => {
    const [dialogName, setDialogName] = useState(null)
    const firebase = useContext(FirebaseContext)
    useEffect(() => {
        console.log('Asking user for notification permissions...')
        firebase.askForPermissioToReceiveNotifications()
    }, [])

    return (
        <Screen withOverflow>
            <h1>Cool, Now Set a Savings Goal!</h1>
            <GoalDialog
                history={props.history}
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
                        console.log('Travel goal chosen')
                        setDialogName('Travel')
                    }}
                />
                <GoalButton
                    type="Gadget"
                    onClick={() => {
                        console.log('Gadget goal chosen')
                        setDialogName('Gadget')
                    }}
                />
                <GoalButton
                    type="Fashion"
                    onClick={() => {
                        console.log('Fashion goal chosen')
                        setDialogName('Fashion')
                    }}
                />
                <GoalButton
                    type="Car"
                    onClick={() => {
                        console.log('Car goal chosen')
                        setDialogName('Car')
                    }}
                />
                <GoalButton
                    type="Other"
                    onClick={() => {
                        console.log('Other goal chosen')
                        setDialogName('Other')
                    }}
                />
            </div>
        </Screen>
    )
}

export default Goals

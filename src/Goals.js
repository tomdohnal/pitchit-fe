import React, { useState } from 'react'
import Button from './Button'
import GoalDialog from './GoalDialog'

const Goals = () => {
    const [showDialog, setShowDialog] = useState(true)
    return (
        <div>
            <div>Goals</div>
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
        </div>
    )
}

export default Goals

import React  from 'react'
import css from './goalButton.module.sass'


const GoalButton = ({ children }) => {
    const className = [css.goalButton]
    return (
        <button type='button' className={className.join(' ')}>
            {children}
        </button>
    )
}

export default GoalButton

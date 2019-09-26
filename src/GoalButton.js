import React from 'react'
import css from './goalButton.module.sass'
import carImg from './undraw_fast_car_p4cu.svg'
import travelImg from './undraw_adventure_4hum.svg'
import gadgetImg from './undraw_online_wishes_dlmr.svg'
import fashinImg from './undraw_window_shopping_b96y.svg'
import otherImg from './undraw_questions_75e0.svg'

const getImage = type => {
    switch (type) {
        case 'Car':
            return <img width={256} src={carImg} alt="" />
        case 'Travel':
            return <img width={256} src={travelImg} alt="" />
        case 'Gadget':
            return <img width={256} src={gadgetImg} alt="" />
        case 'Fashion':
            return <img width={256} src={fashinImg} alt="" />
        case 'Other':
            return <img width={256} src={otherImg} alt="" />
        default:
            throw Error
    }
}

const GoalButton = ({ type, onClick }) => {
    const className = [css.goalButton]
    return (
        <button type="button" onClick={onClick} className={className.join(' ')}>
            <span>{type}</span>
            {getImage(type)}
        </button>
    )
}

export default GoalButton

import moment from 'moment'

export const getNeedToSave = () => {
    const goalDate = moment(localStorage.getItem('GOAL_DATE'), 'DD/MM/YYYY')

    const NEED_TO_SAVE = Math.ceil(
        localStorage.getItem('GOAL_AMOUNT') /
            Math.floor(Math.abs(moment().diff(goalDate, 'months', true))),
    )

    return NEED_TO_SAVE
}

export const getCurrentlySaving = () => {
    return Math.ceil(getNeedToSave() * 0.55)
}
import React from 'react'
import css from './Screen.module.sass'

const Screen = ({ children }) => {
    return <div className={css.screen}>{children}</div>
}

export default Screen

import React from 'react'
import css from './Screen.module.sass'

const Screen = ({ children, withBackground = true }) => {
    return (
        <div
            className={[css.screen, withBackground ? css.background : ''].join(
                ' ',
            )}
        >
            {children}
        </div>
    )
}

export default Screen

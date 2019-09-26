import React from 'react'
import css from './Screen.module.sass'

const Screen = ({ children, withBackground = true, withOverflow = false }) => {
    return (
        <div
            className={[css.screen, withBackground ? css.background : '', withOverflow ? css.overflow : ''].join(
                ' ',
            )}
        >
            {children}
        </div>
    )
}

export default Screen

import React from 'react'
import css from './button.module.sass'

const Button = ({ children, disabled, onClick }) => {
    const className = [css.button]
    return (
        <button
            type="button"
            className={className.join(' ')}
            onPointerDown={() => {
                const audio = new Audio('Button Click Off-SoundBible.com-1730098776.mp3')
                audio.play('')
            }}
            onClick={() => {
                onClick && onClick()
            }}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button

import React  from 'react'
import css from './button.module.sass'


const Button = ({ children, disabled, onClick }) => {
    const className = [css.button]
    return (
        <button type='button' className={className.join(' ')} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button

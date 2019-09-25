import React  from 'react'
import css from './button.module.sass'


const Button = ({ children }) => {
    const className = [css.button]
    return (
        <button type='button' className={className.join(' ')}>
            {children}
        </button>
    )
}

export default Button

import React  from 'react'
import css from './button.module.sass'


const Button = ({ children, onClick }) => {
    const className = [css.button]
    return (
        <button type='button' onClick={onClick} className={className.join(' ')}>
            {children}
        </button>
    )
}

export default Button

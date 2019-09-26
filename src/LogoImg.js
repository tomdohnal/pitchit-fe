import React from 'react'
import moneyImg from './money.svg'
import kittenImg from './kitten.svg'
import css from './LogoImg.module.sass'

const Logo = () => {
    return (
        <div className={css.container}>
            <img src={moneyImg} alt="" width={48} />
            <img src={kittenImg} alt="" width={48} />
        </div>
    )
}

export default Logo

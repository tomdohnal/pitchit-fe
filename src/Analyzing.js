import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Screen from './Screen'
import css from './Analyzing.module.sass'
import img from './undraw_visual_data_b1wx.svg'

const Analyzing = ({ history }) => {
    const [message, setMessage] = useState('Analyzing transactions...')

    useEffect(() => {
        setTimeout(() => {
            setMessage('Finding potential improvements...')
        }, 1000)
        setTimeout(() => {
            setMessage('Looking into spending habits...')
        }, 2000)
        setTimeout(() => {
            history.push('/analysis')
        }, 5000)
    }, [])

    useEffect(() => {
        console.log(message)
    }, [message])

    return (
        <Screen>
            <Helmet>
                <title>Money Kitten | Analyzing...</title>
            </Helmet>
            <div className={css.container}>
                <img height={250} src={img} alt="" />
                <span>{message}</span>
            </div>
        </Screen>
    )
}

export default Analyzing

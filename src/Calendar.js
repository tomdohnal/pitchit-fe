import React from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import { useTransition, animated } from 'react-spring'
import css from './Calendar.module.sass'

const Calendar = ({ onSelect, isOpen }) => {
    const transitions = useTransition(isOpen, null, {
        from: { opacity: 0, transform: 'translateY(10%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0 },
    })

    return transitions.map(({ item, key, props: styleProps }) => {
        return (
            item && (
                <animated.div key={key} style={{ ...styleProps }} className={css.container}>
                    <InfiniteCalendar
                        height={384}
                        width={414}
                        onSelect={onSelect}
                    />
                </animated.div>
            )
        )
    })
}

export default Calendar

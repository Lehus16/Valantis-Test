import React from 'react'
import cn from 'classnames'
import classes from './Pagination.module.css'

const Pagination = ({ start, moveForward, moveBack, cardsLength }) => {


    return (
        <div className={cn(classes.container)}>
            {start !== 0 && <button onClick={moveBack} className={cn(classes.button)}>&#10094;</button>}
            {cardsLength > 50 && <button onClick={moveForward} className={cn(classes.button)}>&#10095;</button>}
        </div>
    )
}

export default Pagination
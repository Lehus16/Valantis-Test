import React from 'react'
import cn from 'classnames'
import classes from './Card.module.css'


const Card = (card) => {
    return (
        <figure className={cn(classes.container)}>
            <h3 className={cn(classes.title)}>{card.product}</h3>
            <img className={cn(classes.image)} src="" alt={card.product + (card.brand !== null ? ' от ' + card.brand : '')} />
            <p className={cn(classes.id)}>{'ID: ' + card.id}</p>
            <p className={cn(classes.price)}>{card.price + '₽'}</p>

        </figure>
    )
}

export default Card
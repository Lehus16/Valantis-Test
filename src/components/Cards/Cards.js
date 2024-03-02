import React from 'react'
import Card from '../Card/Card'
import cn from 'classnames'
import classes from './Cards.module.css'
import Pagination from '../Pagination/Pagination'
const Cards = ({ cards, isLoading, start, moveForward, moveBack, cardsLength }) => {

    return (
        <section className={cn(classes.section)}>
            {isLoading ?
                <h2>Загрузка...</h2>
                :
                <>
                    <Pagination cardsLength={cardsLength} start={start} moveForward={moveForward} moveBack={moveBack} />
                    <div className={cn(classes.container)}>
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                {...card}
                            />
                        ))}

                    </div>
                </>

            }
        </section>

    )
}

export default Cards
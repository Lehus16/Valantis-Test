import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'
import SideBar from '../SideBar/SideBar'
import classes from './Catalog.module.css'
import cn from 'classnames'

const Catalog = ({ cards, errorText, isLoading, onSearchItems, start, moveForward, moveBack, onFilter, cardsLength }) => {

    return (
        <>
            <Header onSearchItems={onSearchItems} />
            <div className={cn(classes.container)}>
                <SideBar onFilter={onFilter} />
                <Cards cardsLength={cardsLength} cards={cards} isLoading={isLoading} errorText={errorText} start={start} moveForward={moveForward} moveBack={moveBack} />
            </div>

            <Footer />
        </>
    )
}

export default Catalog
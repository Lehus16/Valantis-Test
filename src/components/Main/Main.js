import React from 'react'
import classes from './Main.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'

const Main = () => {

    return (
        <>
            <Header />
            <main className={cn(classes.main)}>
                <h2 className={cn(classes.title)}>Тестовое задание на вакансию Frontend разработчика</h2>
                <a className={cn(classes.link)} target='_blank' href='#'>GitHub Repo</a>
                <a className={cn(classes.link)} target='_blank' href='#'>GitHub Pages</a>
            </main>
            <Footer />
        </>
    )
}

export default Main;
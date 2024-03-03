import React from 'react'
import classes from './Main.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Main = () => {

    return (
        <>
            <Header />
            <main className={cn(classes.main)}>
                <h2 className={cn(classes.title)}>Тестовое задание на вакансию Frontend разработчика</h2>
                <div className={cn(classes.links)}>
                    <a className={cn(classes.link)} rel="noreferrer" target='_blank' href='https://github.com/Lehus16/Valantis-Test'>GitHub Repo</a>
                    <a className={cn(classes.link)} rel="noreferrer" target='_blank' href='https://lehus16.github.io/Valantis-Test/'>GitHub Pages</a>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Main;
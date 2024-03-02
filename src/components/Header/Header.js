import React from 'react'
import logo from '../../images/logo.svg'
import classes from './Header.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom';

const Header = () => {



    return (
        <header className={cn(classes.header)} >
            <h1 className={cn(classes.title)}>Valantis Test</h1>
            <nav className={cn(classes.nav)}>
                <Link className={cn(classes.link)} to='/'>На главную</Link>
                <Link className={cn(classes.link)} to='/catalog'>Каталог</Link>
                <img className={cn(classes.logo)} src={logo} alt="Логотип Valantis" />
            </nav>

        </header >
    )
}

export default Header
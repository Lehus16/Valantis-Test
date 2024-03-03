import React from 'react'
import classes from './NotFound.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className={cn(classes.container)}>
            <h2 className={cn(classes.title)}>404</h2>
            <p className={cn(classes.text)}>Страница не найдена</p>
            <Link className={cn(classes.link)} to='/Valantis-Test'>Вернуться на главную</Link>
        </div>
    )
}

export default NotFound
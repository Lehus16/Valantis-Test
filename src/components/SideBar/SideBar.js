import React from 'react'
import cn from 'classnames'
import classes from './SideBar.module.css'

const SideBar = ({ onFilter }) => {


    const [isOpen, setIsOpen] = React.useState(false)
    const [values, setValues] = React.useState({
        brand: '',
        product: '',
        price: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(values)
    }

    return (
        <div className={cn(classes.sideBar)}>
            <button className={cn(classes.button)} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Скрыть ' : `Фильтры`}</button>
            <div className={cn(classes.container, { [classes.open]: isOpen })}>

                <form className={cn(classes.form)} onSubmit={handleSubmit}>
                    <input className={cn(classes.input)} value={values.product} onChange={(e) => setValues({ ...values, product: e.target.value })} placeholder='продукт' />
                    <input className={cn(classes.input)} value={values.brand} onChange={(e) => setValues({ ...values, brand: e.target.value })} placeholder='бренд' />
                    <input className={cn(classes.input)} value={values.price} onChange={(e) => setValues({ ...values, price: e.target.value })} placeholder='цена' />
                    <button className={cn(classes.searchButton)} type='submit'>Показать</button>
                </form>
            </div>
        </div>

    )
}

export default SideBar
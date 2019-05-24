import React from "react"
import classes from './sidebar.module.scss'

function Sidebar(props) {

  return (
    <aside className={classes.container}>
      <ul className={classes['nav-list']}>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
        <li className={classes['nav-item']}>item</li>
      </ul>
    </aside>
  )
}

export default Sidebar

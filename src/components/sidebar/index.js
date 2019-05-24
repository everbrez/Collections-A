import React from "react"
import { Link } from "react-router-dom";
import classes from './sidebar.module.scss'

function Sidebar(props) {

  return (
    <aside className={classes.container}>
      <ul className={classes['nav-list']}>
        <li className={classes['nav-item']}>
          <Link to="register">Register</Link>
        </li>
        <li className={classes['nav-item']}>
          <Link to="404">404</Link>
        </li>
        <li className={classes['nav-item']}>
          <Link to="/">home</Link>
        </li>
        <li className={classes['nav-item']}>
          <Link to="register">Register</Link>
        </li>
        <li className={classes['nav-item']}>
          <Link to="register">Register</Link>
        </li>
        <li className={classes['nav-item']}>
          <Link to="register">Register</Link>
        </li>
        <li className={classes['nav-item']}>
          <Link to="register">Register</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar

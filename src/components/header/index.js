import React, { useState } from 'react'
import classes from './header.module.scss'
import { ReactComponent as SearchIcon } from "../icon/search.svg"

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Collections
      </div>
      <div className={classes['search-container']}>
        <SearchIcon className={classes['search-icon']} />
        <input type="text" placeholder="Type to search ..." />
      </div>
      <ul className={classes['nav-right']}>
        <li className={classes['nav-right-item']}>
          mail
        </li>
        <li className={classes['nav-right-item']}>
          user
        </li>
      </ul>
    </header>
  )
}

export default Header

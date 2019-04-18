import React, { useState } from 'react'
import styles from './header.module.scss'
import { ReactComponent as Logo} from '../icon/logo.svg'

function Header(props) {
  return (
    <header className={styles.header}>
      <i className={styles.logo}>
        <Logo />
      </i>

      <div className={styles.search}>
        <input type="text" className={styles.input} placeholder="search...." />
      </div>

      <div className={styles.message}></div>
      <div className={styles.setting}></div>
      <div className={styles.profile}></div>
    </header>
  )
}

export default Header

import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import classes from './header.module.scss'
import { ReactComponent as SearchIcon } from "../icon/search.svg"

import { isLogin } from '../../utils'

function Header(props) {
  const { user } = props
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
        {
          isLogin()
          ? (
            <li className={classes['nav-right-item']}>
              {user.userName}
            </li>
          )
          :null
        }
        <li className={classes['nav-right-item']}>
          {user.email ? user.email : 'mail'}
        </li>
        <li className={classes['nav-right-item']}>
          {
            !isLogin()
            ? (<Link to="login">
              login
            </Link>)
            : (<Link to="logout">
              logout
            </Link>
            )
            
          }
        </li>
        {
          isLogin()
          ? null
          : (<li className={classes['nav-right-item']}>
            <Link to="register">
              sign up
            </Link>
          </li>
          )
        }
      </ul>
    </header>
  )
}

const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps)(Header)

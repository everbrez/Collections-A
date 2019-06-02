import React from 'react'
import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import classes from './register.module.scss'

export default function Register(props) {
  return (
    <>
      <Header />
      <main className={classes['container']}>
        <Sidebar />
        <section className={classes['form-container']}>
          <form className={classes.form} action="http://localhost:8888/register" method="post" encType="application/x-www-form-urlencoded">
            <label htmlFor="username">
              username
            </label>
            <input type="text" placeholder="username" required id="username" name="userName" autoComplete="username"/>

            <label htmlFor="password">
              password
            </label>
            <input type="password" placeholder="password" required id="password" name="password" autoComplete="new-password"/>

            <label>
              email
            </label>
            <input type="mail" placeholder="email" id="mail" name="email" autoComplete="email"/>

            <button type="submit">
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

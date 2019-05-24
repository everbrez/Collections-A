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
          <form className={classes.form}>
            <label for="username">
              username
            </label>
            <input type="text" placeholder="username" />

            <label for="password">
              password
            </label>
            <input type="password" placeholder="password" />

            <label>
              email
            </label>
            <input type="mail" placeholder="email" />

            <button type="submit">
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

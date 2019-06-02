import React, { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import Header from '../../components/header'
import classes from './login.module.scss'

import { ReactComponent as User } from '../../components/icon/user.svg'
import { ReactComponent as Lock } from '../../components/icon/lock.svg'
import { ReactComponent as Eye } from '../../components/icon/eye.svg'
import { ReactComponent as EyeOpen } from '../../components/icon/eye_open.svg'

function Login(props) {
  const [showPassword, togglePasswordVisibility] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const { target : { userName, password, remember} } = event
    const data = {
      userName: userName.value,
      password: password.value,
      remember: remember.checked,
    }
    // console.log(data)
    fetch('http://localhost:8888/login', {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'POST'
    })
    .then(res => res.json())
    .then(e => console.log(e))
    .catch(e => console.log(e))
    return null
  }

  return (
    <>
      <Header />
      <main className={classes.container}>
        <section className={classnames(classes['form-container'])}>
          <form className={classnames(classes.form)} onSubmit={handleSubmit}>
            <h1 className={classes.title}>LOGIN</h1>

            {/* user name */}
            <div className={classnames(classes['input-container'], classes['userName-container'])}>
              <User className={classes['icon']}/>
              <input
                type="text"
                id="userName"
                name="userName"
                className={classes.userName}
                placeholder="Email or user name"
              />
            </div>
            {/* password */}
            <div className={classnames(classes['input-container'], classes['password-container'])}>
              <Lock className={classes['icon']}/>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className={classes.password}
                placeholder="Password"
              />
              <Eye
                className={classnames(classes.icon, classes['eye'], { [classes.hidden]: showPassword})}
                onClick={() => togglePasswordVisibility(true)}
              />
              <EyeOpen
                className={classnames(classes.icon, classes['eye-open'], { [classes.hidden]: !showPassword})}
                onClick={() => togglePasswordVisibility(false)}
              />
            </div>

            {/* remember ? */}
            <section className={classes['checkbox-container']}>
              <label>
                <input type="checkbox" id="remember" name="remember" className={classes.remember}/>
                remember me
              </label>

              <span>
                <Link to="/home">forgot password</Link>
              </span>
            </section>

            {/* login button */}
            <section className={classes['login-container']}>
              <button type="submit" className={classes['login-btn']}>login</button>
            </section>

          </form>
        </section>
      </main>
    </>
  )
}

export default Login
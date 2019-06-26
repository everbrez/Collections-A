import React, { useState } from 'react'
import classnames from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../../components/header'
import classes from './login.module.scss'

import { ReactComponent as User } from '../../components/icon/user.svg'
import { ReactComponent as Lock } from '../../components/icon/lock.svg'
import { ReactComponent as Eye } from '../../components/icon/eye.svg'
import { ReactComponent as EyeOpen } from '../../components/icon/eye_open.svg'

import { isLogin } from '../../utils'
import { addUser } from '../../actions'

function Login(props) {
  const [showPassword, togglePasswordVisibility] = useState(false)
  const [remember, toggleRemember] = useState(false)

  const { history, addUser } = props

  if (isLogin()) {
    history.push('/')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const { target : { uname, password, remember} } = event
    const data = {
      uname: uname.value,
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
    .then(e => {
      if (e.error) throw new Error(e.error)
      console.log(e)
      addUser(e)
      history.push('/')
    })
    .catch(e => console.log(e.message))

    return false
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
                required
                type="text"
                id="uname"
                name="uname"
                className={classes.userName}
                placeholder="Email or user name"
              />
            </div>
            {/* password */}
            <div className={classnames(classes['input-container'], classes['password-container'])}>
              <Lock className={classes['icon']}/>
              <input
                required
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
                <div
                  className={classnames(classes['checkbox'], {
                    [classes.checked]: remember,
                  })}
                />
                <input
                  type="checkbox" 
                  id="remember" 
                  name="remember" 
                  className={classes.remember} 
                  checked={remember}
                  hidden
                  onChange={() => toggleRemember(state => !state)}
                />
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

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(withRouter(Login))

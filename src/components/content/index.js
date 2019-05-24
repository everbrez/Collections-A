import React from 'react'
import Sidebar from '../sidebar'
import classes from './content.module.scss'

function Content(props) {

  return (
    <main className={classes.container}>
      <Sidebar className={classes.aside}/>
      <section className={classes['content-container']}>
        main-conteint
      </section>
    </main>
  )
}

export default Content
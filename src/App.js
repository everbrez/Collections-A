import React, { Component } from 'react';
import styles from './app.module.scss'
import Header from './components/header'
import Content from './components/content'

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Content />
      </main>
    );
  }
}

export default App;

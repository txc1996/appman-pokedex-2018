import React, { Component } from 'react'

import GlobalStyles from './GlobalStyles'
import MyPokedex from './pages/MyPokedex'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <MyPokedex />
      </>
    )
  }
}

export default App

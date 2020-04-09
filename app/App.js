import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../src/pages/home'
import { Provider } from 'react-redux'
import storeRedux from '../src/store'
const App = () => {
  return (
    <Provider store={storeRedux}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
}

export default App

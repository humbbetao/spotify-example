import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from 'pages/home'
import { Provider } from 'react-redux'
import storeRedux from 'store'
import './styles.css'

const App = () => (
  <Provider store={storeRedux}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
)

export default App

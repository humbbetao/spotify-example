import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../src/pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default App

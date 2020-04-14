import React from 'react'
import useAuthenticate from 'hooks/useAuthenticate'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ Component, ...rest }) {
  debugger
  const isAuthenticed = useAuthenticate()
  console.log(Component, 'isAuthenticed')

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticed ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

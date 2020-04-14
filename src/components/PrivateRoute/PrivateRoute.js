import React from 'react'
import useAuthenticate from 'hooks/useAuthenticate'

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticed = useAuthenticate()

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticed ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

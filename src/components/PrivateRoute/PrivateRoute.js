import React from 'react'
import useAuthenticate from 'hooks/useAuthenticate'
import { Redirect, Route } from 'react-router-dom'
import constants from 'config/constants'

export default function PrivateRoute({ Component, ...routeProps }) {
  if (routeProps.location.pathname.includes('/album')) {
    localStorage.setItem(
      constants.PREVIOUS_PATHNAME,
      routeProps.location.pathname
    )
  }

  const artist = ((routeProps.computedMatch || {}).params || {}).artist
  const numberOfParams = Object.keys(
    (routeProps.computedMatch || {}).params || {}
  ).length
  if (!!artist && numberOfParams === 1) {
    localStorage.setItem(constants.ARTIST, artist)
  }

  const isAuthenticed = useAuthenticate()

  return (
    <Route
      {...routeProps}
      render={renderProps =>
        isAuthenticed ? <Component {...renderProps} /> : <Redirect to="/" />
      }
    />
  )
}

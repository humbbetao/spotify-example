import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import AuthActionsCreators from 'store/reducers/auth/actionCreators'
import AlbumActions from 'store/reducers/album/actionCreators'
import constants from 'config/constants'
import useAuthenticate from './useAuthenticate'

export default function useAlbum() {
  const params = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  console.log(params)
  debugger
  localStorage.setItem(constants.ARTIST, params.artist)

  if (!useAuthenticate()) {
    return
  }

  //after isAuthenticated, when user artist saved in locastorage try to get again to request
  // const artist = localStorage.getItem(constants.ARTIST)

  //   if (!artist) {
  //     history.replace('/')
  //     return
  //   }

  //   localStorage.removeItem(ARTIST)
  // console.log(params)
  // console.log(artist)
  // debugger

  if (!artist) {
    return
  }

  dispatch(AlbumActions.search(artist))
  history.push(`/album/${artist}`)
}

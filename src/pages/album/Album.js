import React, { useEffect } from 'react'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import List from 'components/List'
import Article from 'components/Article'
import { useSelector, useDispatch } from 'react-redux'
import useTitle from 'hooks/useTitle'
import './album.css'
import { useParams } from 'react-router-dom'
import AlbumActions from '../../store/reducers/album/actionCreators'
import constants from 'config/constants'

export default function Album() {
  const { artist } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AlbumActions.search(artist))
    localStorage.removeItem(constants.PREVIOUS_PATHNAME)
  }, [])

  const { query, albums } = useSelector(state => ({
    query: state.album.query,
    albums: state.album.albums,
  }))

  const title = useTitle()

  return (
    <main>
      <Sidebar />
      <Article>
        <Browser />
        {query && <List title={title} albums={albums} />}
      </Article>
    </main>
  )
}

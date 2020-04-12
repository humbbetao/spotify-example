import React, { useEffect } from 'react'
import './album.css'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import Label from 'components/Label'
import Article from 'components/Article'
import SongBig from 'components/SongBig'

import { useSelector, useDispatch } from 'react-redux'
import SongList from 'components/SongList'
import { useLocation, useParams } from 'react-router-dom'
import SongsActions from '../../store/reducers/songs/actionCreators'
export default function Album() {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(location)
    dispatch(SongsActions.getSongs(params.album))
  }, [])

  const { songs, album } = useSelector(state => {
    const album = state.album.albums.find(album => album.id === params.album)

    return {
      songs: state.songs,
      album: album,
    }
  })

  if (!songs || !album) return null

  return (
    <main>
      <Sidebar></Sidebar>
      <Article>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SongBig album={album}></SongBig>
          <SongList songs={songs.songs}></SongList>
        </div>
      </Article>
    </main>
  )
}

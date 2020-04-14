import React, { useEffect } from 'react'
import './album.css'
import Sidebar from 'components/Sidebar'
import Label from 'components/Label'
import Article from 'components/Article'
import AlbumCoverBig from 'components/AlbumCoverBig'

import { useSelector, useDispatch } from 'react-redux'
import SongList from 'components/SongList'
import { useHistory, useParams } from 'react-router-dom'
import SongsActions from '../../store/reducers/songs/actionCreators'
export default function Album() {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
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
  const history = useHistory()
  const goBack = () => history.goBack()
  console.log(history)
  return (
    <main>
      <Sidebar></Sidebar>
      <Article>
        <Label onClick={goBack}>Voltar</Label>

        <div>
          <AlbumCoverBig album={album}></AlbumCoverBig>
          <SongList songs={songs.songs}></SongList>
        </div>
      </Article>
    </main>
  )
}

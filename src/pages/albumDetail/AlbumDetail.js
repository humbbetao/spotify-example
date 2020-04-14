import React, { useEffect } from 'react'
import Sidebar from 'components/Sidebar'
import Label from 'components/Label'
import Article from 'components/Article'
import AlbumCoverBig from 'components/AlbumCoverBig'

import { useSelector, useDispatch } from 'react-redux'
import SongList from 'components/SongList'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import SongsActions from 'store/reducers/songs/actionCreators'

import './albumDetail.css'

export default function AlbumDetail() {
  const params = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const { songs, album } = useSelector(state => {
    const album = state.album.albums.find(album => album.id === params.album)

    return {
      songs: state.songs,
      album: album,
    }
  })

  useEffect(() => {
    dispatch(SongsActions.getSongs(params.album))
  }, [params.album, dispatch])

  if (!songs || !album) return null

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

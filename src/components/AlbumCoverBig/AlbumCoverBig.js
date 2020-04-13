import React from 'react'
import P from 'components/P'
import './albumCoverBig.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SongActions from 'store/reducers/songs/actionCreators'

export default function AlbumCoverBig({ album = { images: [] } }) {
  const history = useHistory()
  const dispatch = useDispatch()
  if (!album) return
  console.log(album)

  const handleOnClickOnSong = () => {
    dispatch(SongActions.setAlbum(album))
    history.replace(`/albums/${album.id}`)
  }
  return (
    <span onClick={handleOnClickOnSong}>
      <picture>
        {album.images.map(image => (
          <source
            key={image.url}
            media={`(min-width: ${image.width * 3}px)`}
            srcSet={image.url}
            alt={album.name}
            className="album-cover-big"
          />
        ))}
        {album.images.length > 0 && (
          <img
            className="album-cover-big"
            src={album.images[0].url}
            alt={album.name}
          />
        )}
      </picture>

      <P>{album.artists[0].name}</P>
      <P>{album.name}</P>
    </span>
  )
}

import React from 'react'
import P from 'components/P'
import './song.css'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SongActions from 'store/reducers/songs/actionCreators'
export default function SongBig({ album = { images: [] } }) {
  const history = useHistory()
  const dispatch = useDispatch()
  console.log(album)
  if (!album) return
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
          />
        ))}
        {album.images.length > 0 && (
          <img
            className="image-song"
            src={album.images[0].url}
            alt={album.name}
          />
        )}
      </picture>

      <P>{album.artists[album.artists.length - 1].name}</P>
      <P>{album.name}</P>
    </span>
  )
}

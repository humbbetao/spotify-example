import React from 'react'
import P from 'components/P'
import './albumCover.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SongActions from 'store/reducers/songs/actionCreators'

export default function AlbumCover({ album = { image: [] } }) {
  const history = useHistory()
  const dispatch = useDispatch()
  if (!album) return
  const artist = album.artists[0].name

  const handleOnClickOnSong = () => {
    dispatch(SongActions.setAlbum(album))
    history.push(`/albums/${artist}/${album.id}`)
  }

  return (
    <li className="album-item" onClick={handleOnClickOnSong}>
      <picture>
        {album.images &&
          album.images.map(image => (
            <source
              key={image.url}
              media={`(min-width: ${image.width * 3}px)`}
              srcSet={image.url}
              alt={album.name}
              className="album-cover"
            />
          ))}
        <img
          className="album-cover"
          src={album.images[0].url}
          alt={album.name}
        />
      </picture>

      <P className="title-album">{artist}</P>
      <P className="artist-album">{album.name}</P>
    </li>
  )
}

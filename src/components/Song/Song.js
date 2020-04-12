import React from 'react'
import P from 'components/P'
import './song.css'
import { useHistory } from 'react-router-dom'

export default function Song({ album = { image: [] } }) {
  console.log(album)
  const history = useHistory()
  if (!album) return
  const handleOnClickOnSong = () => history.push('/albums/rihanna')
  return (
    <li onClick={handleOnClickOnSong}>
      <picture>
        {album.images.map(image => (
          <source
            media={`(min-width: ${image.width * 3}px)`}
            srcset={image.url}
            alt={album.name}
          />
        ))}
        <img
          className="image-song"
          src={album.images[album.images.length - 1].url}
          alt={album.name}
        />
      </picture>

      <P>{album.artists[album.artists.length - 1].name}</P>
      <P>{album.name}</P>
    </li>
  )
}

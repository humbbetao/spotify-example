import React from 'react'
import P from 'components/P'
import './albumCoverBig.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SongActions from 'store/reducers/songs/actionCreators'

export default function AlbumCoverBig({ album }) {
  // const history = useHistory()
  // const dispatch = useDispatch()
  if (!album) return

  // const handleOnClickOnSong = () => {
  //   dispatch(SongActions.setAlbum(album))
  //   history.replace(`/albums/${album.id}`)
  // }
  return (
    <span>
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

      <P className="title-album">{album.artists[0].name}</P>
      <P className="artist-album">{album.name}</P>
    </span>
  )
}

import React from 'react'
import P from 'components/P'
import './albumCoverBig.css'

export default function AlbumCoverBig({ album }) {
  if (!album) return

  return (
    <span>
      <picture>
        {album.images.map(image => (
          <source
            key={image.url}
            media={`(max-width: ${image.width}px)`}
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

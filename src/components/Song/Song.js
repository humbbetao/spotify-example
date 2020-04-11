import React from 'react'
import P from 'components/P'
import './song.css'

export default function Song() {
  return (
    <li>
      <div className="image-song"></div>
      <P>Nome do álbum</P>
      <P>Nome do artista</P>
    </li>
  )
}

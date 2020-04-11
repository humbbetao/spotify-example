import React from 'react'
import P from 'components/P'
import './song.css'
import { useHistory } from 'react-router-dom'

export default function Song() {
  const history = useHistory()
  const handleOnClickOnSong = () => history.push('/albums/rihanna')
  return (
    <li onClick={handleOnClickOnSong}>
      <div className="image-song"></div>
      <P>Nome do álbum</P>
      <P>Nome do artista</P>
    </li>
  )
}

import React from 'react'
import Song from 'components/Song'

export default function List() {
  return (
    <React.Fragment>
      <p>Álbuns buscados recentemente</p>
      {Array.from(new Array(20)).map((item, id) => (
        <Song key={id}></Song>
      ))}
    </React.Fragment>
  )
}

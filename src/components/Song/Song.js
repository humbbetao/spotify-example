import React from 'react'

export default function Song() {
  return (
    <React.Fragment>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#fff',
          color: '#fff',
        }}
      ></div>
      <p
        style={{
          color: '#fff',
        }}
      >
        Nome do álbum
      </p>
      <p
        style={{
          color: '#fff',
        }}
      >
        Nome do artista
      </p>
    </React.Fragment>
  )
}

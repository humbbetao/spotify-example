import React, { useState, useRef } from 'react'
import './textInput.css'
export default function TextInput() {
  const [query, setQuery] = useState('')
  const handleOnChangeQuery = e => {
    setQuery(e.target.value)
  }
  return (
    <React.Fragment>
      <label style={{ color: '#fff' }}>
        Busque por artistas, álbuns ou músicas Name
      </label>
      <input
        type="text"
        onChange={handleOnChangeQuery}
        value={query}
        placeholder="Comece a escrever..."
      ></input>
    </React.Fragment>
  )
}

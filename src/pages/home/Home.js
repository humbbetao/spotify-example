import React, { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const handleOnChangeQuery = (e) => {
    setQuery(e.target.value)
  }
  return (
    <div style={{ color: '#fff' }}>
      <input type="text" onChange={handleOnChangeQuery} value={query}></input>
    </div>
  )
}

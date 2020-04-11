import React, { useState } from 'react'
import Label from 'components/Label'
import TextInput from 'components/TextInput'

export default function Search() {
  const [query, setQuery] = useState('')
  const handleOnChangeQuery = e => {
    setQuery(e.target.value)
  }

  return (
    <React.Fragment>
      <Label color="white">Busque por artistas, álbum ou músicas</Label>
      <TextInput value={query} onChange={handleOnChangeQuery}></TextInput>
    </React.Fragment>
  )
}

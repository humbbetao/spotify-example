import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Label from 'components/Label'
import TextInput from 'components/TextInput'
import SearchActions from 'store/reducers/search/actionCreators'

export default function Search() {
  const [query, setQuery] = useState('')
  const handleOnChangeQuery = e => {
    setQuery(e.target.value)
  }
  const dispatch = useDispatch()

  const callbackWhenUserStopTypying = () => {
    dispatch(SearchActions.searchAlbuns(query))
  }

  return (
    <React.Fragment>
      <Label color="white">Busque por artistas, álbum ou músicas</Label>
      <TextInput
        value={query}
        onChange={handleOnChangeQuery}
        placeholder="Comece a escrever..."
        callback={callbackWhenUserStopTypying}
      ></TextInput>
    </React.Fragment>
  )
}

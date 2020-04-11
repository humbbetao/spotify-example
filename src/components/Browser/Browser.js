import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Label from 'components/Label'
import TextInput from 'components/TextInput'
import BrowserActions from 'store/reducers/browser/actionCreators'

export default function Browser() {
  const [query, setQuery] = useState('')
  const handleOnChangeQuery = e => {
    setQuery(e.target.value)
  }
  const dispatch = useDispatch()

  const callbackWhenUserStopTypying = () => {
    dispatch(BrowserActions.browserAlbuns(query))
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

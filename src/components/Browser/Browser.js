import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Label from 'components/Label'
import TextInput from 'components/TextInput'
import AlbumActions from 'store/reducers/album/actionCreators'

export default function Browser() {
  debugger
  const [query, setQuery] = useState('')
  let queryByParams = useSelector(state => state.album.query)

  useEffect(() => {
    setQuery(queryByParams)
  }, [queryByParams])

  const handleOnChangeQuery = e => {
    setQuery(e.target.value)
  }
  const dispatch = useDispatch()

  useEffect(() => {
    if (!query || query.length === 0) {
      dispatch(AlbumActions.clear())
    }
  }, [query])

  const callbackWhenUserStopTypying = () => {
    if (!query) return
    dispatch(AlbumActions.search(query))
  }

  const handleOnBlur = () => {
    if (!query) return
    dispatch(AlbumActions.search(query))
  }

  return (
    <React.Fragment>
      <Label color="white">Busque por artistas, álbum ou músicas</Label>
      <TextInput
        value={query}
        onChange={handleOnChangeQuery}
        placeholder="Comece a escrever..."
        callback={callbackWhenUserStopTypying}
        handleOnBlur={handleOnBlur}
      ></TextInput>
    </React.Fragment>
  )
}

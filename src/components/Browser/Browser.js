import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Label from 'components/Label'
import TextInput from 'components/TextInput'
import AlbumActions from 'store/reducers/album/actionCreators'

export default function Browser() {
  let queryByParams = useSelector(state => state.album.query)

  const [query, setQuery] = useState(queryByParams || '')

  useEffect(() => {
    setQuery(queryByParams)
  }, [queryByParams])

  useEffect(() => {
    if (!query || query.length === 0) {
      dispatch(AlbumActions.clearAlbum())
    }
  }, [query])

  const handleOnChangeQuery = e => {
    setQuery(e.target.value)
  }
  const dispatch = useDispatch()

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

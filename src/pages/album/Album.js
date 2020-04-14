import React from 'react'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import List from 'components/List'
import Article from 'components/Article'
import { useSelector } from 'react-redux'
import './album.css'

export default function Album() {
  const { query, history } = useSelector(state => ({
    query: state.album.query,
    history: [...state.album.history].reverse(),
  }))

  const title = useTitle()

  console.log(query, (history[0] || {}).albums)
  return (
    <main>
      <Sidebar />
      <Article>
        <Browser />
        {query && <List title={title} albums={(history[0] || {}).albums} />}
      </Article>
    </main>
  )
}

import React from 'react'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import List from 'components/List'
import Article from 'components/Article'
import { useSelector } from 'react-redux'
import './home.css'
import useTitle from 'hooks/useTitle'

export default function Home() {
  const { query, history } = useSelector(state => ({
    query: state.album.query,
    history: [...state.album.history].reverse(),
  }))

  const title = useTitle()
  console.log('aqui')
  console.log(query, (history[0] || {}).albums)
  return (
    <main>
      <Sidebar />
      <Article>
        <Browser />
        {query ? (
          <List title={title} albums={(history[0] || {}).albums} />
        ) : (
          history.map(item => (
            <List
              key={item.query}
              title={title}
              albums={item.albums}
              query={item.query}
            />
          ))
        )}
      </Article>
    </main>
  )
}

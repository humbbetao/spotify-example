import React, { useEffect } from 'react'
import './home.css'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import List from 'components/List'
import Article from 'components/Article'

export default function Home(props) {
  const getToken = () => {
    const able = true
    if (able) {
      const { setToken, setError } = props
      try {
        const hashParams = {}
        let e
        const r = /([^&;=]+)=?([^&;]*)/g
        const q = window.location.hash.substring(1)
        while ((e = r.exec(q))) {
          hashParams[e[1]] = decodeURIComponent(e[2])
        }
        if (!hashParams.access_token) {
          const spotify = `${process.env.AUTH_API}/authorize?client_id=${process.env.CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${process.env.REDIRECT_URI}/callback`
          window.location.href = spotify
        } else {
          setToken(hashParams.access_token)
        }
      } catch (e) {
        setError(e)
      }
    }
  }

  useEffect(getToken, [])
  const getTitle = () => {
    const { hasAlbumsRecentlySearched, query } = props
    if (!query) {
      return ''
    }
    if (query || hasAlbumsRecentlySearched) {
      return `Resultados encontrados para "${query}"`
    }
    return 'Álbuns buscados recentemente'
  }

  const title = getTitle()

  return (
    <div className="main">
      <Sidebar>asjkdhaskjd</Sidebar>
      <Article>
        <Browser></Browser>
        <List title={title} />
      </Article>
    </div>
  )
}

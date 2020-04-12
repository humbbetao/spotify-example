import React, { useEffect } from 'react'
import './home.css'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import List from 'components/List'
import Article from 'components/Article'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function useQuery(search) {
  return new URLSearchParams(search)
}

export default function Home(props) {
  const getToken = () => {
    const able = true
    if (able) {
      const { setToken, setError } = props
      try {
        let query = useQuery(props.location.search)
        const access_token = query.get('code')
        if (!access_token) {
          const spotify = `${process.env.AUTH_API}/authorize?client_id=${process.env.CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=code&redirect_uri=${process.env.REDIRECT_URI}/callback`
          window.location.href = spotify
        } else {
          setToken(access_token)
        }
      } catch (e) {
        console.log(e)
        setError(e)
      }
    }
    console.log(props)
    if (!props.match.params.artist) return
    props.searchAlbumByArtist(props.match.params.artist)
  }

  useEffect(getToken, [])

  const { albums, query, history } = useSelector(state => ({
    albums: state.album.albums,
    query: state.album.query,
    history: state.album.history,
  }))

  const getTitle = () => {
    if (query) {
      if (albums) {
        return `Resultados encontrados para "${query}"`
      }
    }
    if (history) {
      return 'Álbuns buscados recentemente'
    }
    if (!query) {
      return ''
    }
    return 'Álbuns buscados recentemente'
  }

  const title = getTitle()

  return (
    <main>
      <Sidebar></Sidebar>
      <Article>
        <Browser></Browser>
        {query ? (
          <List
            title={title}
            albums={(history[history.length - 1] || {}).albums}
          />
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

import React, { useEffect } from 'react'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import List from 'components/List'
import Article from 'components/Article'
import { useSelector } from 'react-redux'
import './home.css'

export default function Home(props) {
  // const getToken = () => {
  //   localStorage.setItem(ARTIST, props.match.params.artist)
  //   console.log('artist', props.match.params.artist)
  //   debugger
  //   if (isLogged) return
  //   const { setToken, setError } = props
  //   try {
  //     let hashParams = {}
  //     let e,
  //       r = /([^&;=]+)=?([^&;]*)/g,
  //       q = window.location.hash.substring(1)
  //     while ((e = r.exec(q))) {
  //       hashParams[e[1]] = decodeURIComponent(e[2])
  //     }

  //     // const accessTokenFromQuery = query.get('code')
  //     // var accessTokenFromLocalStorage = localStorage.getItem(
  //     //   constants.ACCESS_TOKEN
  //     // )

  //     console.log('artist', props)
  //     if (!hashParams.access_token) {
  //       const spotify = `${process.env.AUTH_API}/authorize?client_id=${process.env.CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${process.env.REDIRECT_URI}/callback`
  //       window.location.href = spotify
  //     } else {
  //       setToken(hashParams.access_token)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     setError(e)
  //   }
  //   const artist = localStorage.getItem(ARTIST)
  //   console.log(artist)

  //   if (!artist) {
  //     props.history.replace('/')
  //     return
  //   }

  //   props.searchAlbumByArtist(artist)
  //   localStorage.removeItem(ARTIST)

  //   if (!artist) return
  //   props.searchAlbumByArtist(artist)
  //   props.history.push(`/album/${artist}`)
  // }
  const {
    albums,
    query,
    history,
    /*isLogged*/
  } = useSelector(state => ({
    albums: state.album.albums,
    query: state.album.query,
    history: [...state.album.history].reverse(),
    // isLogged: state.auth.isLogged,
  }))
  // useEffect(getToken, [isLogged])

  const getTitle = () => {
    if (query) {
      if (albums) {
        return `Resultados encontrados para "${query}":`
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

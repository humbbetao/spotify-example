import { useSelector } from 'react-redux'

export default function useTitle() {
  const { albums, query } = useSelector(state => ({
    albums: state.album.albums,
    query: state.album.query,
  }))

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
  return getTitle()
}

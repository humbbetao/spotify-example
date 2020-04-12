import request from 'config/Request'

const domain = process.env.BROWSER_API
const defaultType = 'album'
const limitOfAlbums = 10

export default class BrowserServices {
  static searchByAlbuns = query => {
    const params = { q: query, type: defaultType, limit: limitOfAlbums }
    return request.get(`${domain}/search`, params).then(response => response)
  }

  static searchSongsByAlbumId = id => {
    return request.get(`${domain}/albums/${id}`, {}).then(response => response)
  }
}

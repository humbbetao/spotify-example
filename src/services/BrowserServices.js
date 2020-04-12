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
  // static refreshToken = () => {
  //   const params = {
  //     grant_type: 'refresh_token',
  //     refresh_token: 'refresh_token',
  //   }
  //   const axiosConfig = {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   }
  //   return request
  //     .get(`${domain}/token/`, params, axiosConfig)
  //     .then(response => response)
  // }
}
// https://accounts.spotify.com/api/token

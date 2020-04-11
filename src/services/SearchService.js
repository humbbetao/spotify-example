import request from 'config/request'
const domain = process.env.BROWSER_API

const defaultType = 'album'
export default class BrowserServices {
  static browserByAlbuns = query => {
    const params = { q: query, type: defaultType }
    return request.get(domain, params).then(response => response)
  }
}

import request from 'config/Request'

const domain = process.env.BROWSER_API

export default class OAuthServices {
  static requestRefreshToken = token => {
    const obj = {
      redirect_uri: 'http://localhost:3000/callback',
      grant_type: 'authorization_code',
      code: token,
    }
    const axiosConfig = {
      headers: {
        authorization: `Basic ${btoa(
          '95555d82a874400ab026efab926d00ae'
        )}:${btoa('a93b1609d29e454e8c5f2f8c38d2da46')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    }
    return request
      .post('https://accounts.spotify.com/api/token', { ...obj }, axiosConfig)
      .then(response => response)
  }

  static refreshToken = () => {
    const params = {
      grant_type: 'refresh_token',
      refresh_token: 'refresh_token',
    }
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
    return request
      .get(`${domain}/token/`, params, axiosConfig)
      .then(response => response)
  }
}

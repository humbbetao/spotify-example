import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: '/',
  headers: { accept: '*/*' },
})

// #url - the relative path to the API
// #params - Object - query string variables
// #axiosConfig - Object - config passed along to the axios request
// #data - Object - the object jumping the wire

const Request = {
  get: (url, params, axiosConfig) => {
    if (!url) {
      throw new Error('Missing url parameter')
    }

    return api.get(url, params, axiosConfig).then(data => {
      return data
    })
  },
  post: (url, data, axiosConfig) => {
    if (!url || !data) {
      throw new Error('Missing URL parameter and Missing DATA parameter ')
    }
    return api.post(url, data, axiosConfig).then(data => data)
  },
  put: (url, data, axiosConfig) => {
    if (!url || !data) {
      throw new Error('Missing URL parameter and Missing DATA parameter ')
    }

    return api.put(url, data, axiosConfig).then(data => {
      return data
    })
  },
  options: (url, data, axiosConfig) => {
    if (!url || !data) {
      throw new Error('Missing URL parameter and Missing DATA parameter ')
    }

    return api.options(url, data, axiosConfig).then(data => {
      return data
    })
  },
  delete: (url, params, axiosConfig) => {
    if (!url) {
      throw new Error('Missing url parameter')
    }

    return api.delete(url, params, axiosConfig).then(data => {
      return data
    })
  },
  patch: (url, data, axiosConfig) => {
    if (!url || !data) {
      throw new Error('Missing URL parameter and Missing DATA parameter ')
    }

    return api.patch(url, data, axiosConfig).then(data => {
      return data
    })
  },
  head: (url, params, axiosConfig) => {
    if (!url) {
      throw new Error('Missing url parameter')
    }

    return api.head(url, params, axiosConfig).then(data => {
      return data
    })
  },
  link: (url, params, axiosConfig) => {
    if (!url) {
      throw new Error('Missing url parameter')
    }

    return api.link(url, params, axiosConfig).then(data => {
      return data
    })
  },
  unlink: (url, params, axiosConfig) => {
    if (!url) {
      throw new Error('Missing url parameter')
    }

    return api.unlink(url, params, axiosConfig).then(data => {
      return data
    })
  },
}
export { api }
export default Request

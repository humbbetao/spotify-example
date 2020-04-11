import request from 'helpers/request'
import EnvVars from 'helpers/envVars'
import buildHTTPResponseHandler from 'helpers/buildHTTPResponseHandler'

const domain = process.env.BROWSER_API
const serviceName = 'DealerServices'

export default class DealerServices {
  static getSellers = () => {
    return request
      .get(`${BROWSER_API}`)
      .then(response => response)
  }
}

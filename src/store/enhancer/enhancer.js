import { applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import middlewares from '../middlewares'

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(composeWithDevTools(applyMiddleware(...middlewares)))
    : applyMiddleware(...middlewares)

export default enhancer

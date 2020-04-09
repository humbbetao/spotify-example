import { applyMiddleware, compose } from 'redux'
import middlewares from '../middlewares'

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)

export default enhancer

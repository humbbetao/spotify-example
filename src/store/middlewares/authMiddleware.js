export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
    next(action)

    // const { promise, types, ...rest } = action
    // if (!promise) {
    //   return next(action)
    // }

    // // eslint-disable-next-line no-param-reassign
    // client.token = (getState().auth.tokens || {}).access_token

    // const [REQUEST, SUCCESS, FAILURE] = types
    // next({ ...rest, type: REQUEST })

    // let actionPromise = Promise.resolve()
    // const { tokens } = getState().auth

    // const refreshThreshold = new Date().getTime() + 300000 // 5 minutes from now

    // if (tokens.refresh_token && refreshThreshold > tokens.expires_at) {
    //   actionPromise = client
    //     .post('/my-server/renew', {
    //       data: { refresh_token: tokens.refresh_token },
    //     })
    //     .then(
    //       result => {
    //         client.token = result.access_token
    //         return next({
    //           ...rest,
    //           result,
    //           type: SET_TOKENS,
    //         })
    //       },
    //       errors =>
    //         next({
    //           ...rest,
    //           errors,
    //           type: SIGN_OUT,
    //         })
    //     )
    //     .then(() => promise(client))
    // } else {
    //   actionPromise = promise(client)
    // }

    // actionPromise
    //   .then(
    //     result => next({ ...rest, result, type: SUCCESS }),
    //     errors => next({ ...rest, errors, type: FAILURE })
    //   )
    //   .catch(error => {
    //     console.error('MIDDLEWARE ERROR:', error)
    //     next({ ...rest, error, type: FAILURE })
    //   })

    // return actionPromise
  }
}

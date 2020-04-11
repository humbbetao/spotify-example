import React, { useEffect, useRef } from 'react'

const useDidMountEffect = (func, deps) => {
  const interval = 500 //2s
  const checkWhenUserStopTypying = () => {
    const timeout = setTimeout(callback, interval)

    return () => clearTimeout(timeout)
  }

  useEffect(checkWhenUserStopTypying, [value])
}

export default useDidMountEffect

import React, { useEffect, useState } from 'react'
import './textInput.css'

export default function TextInput({
  value,
  placeholder = '',
  onChange,
  onBlur,
  callback,
}) {
  const interval = 500 //2s
  const checkWhenUserStopTypying = () => {
    const timeout = setTimeout(callback, interval)

    return () => clearTimeout(timeout)
  }

  useEffect(checkWhenUserStopTypying, [value])

  return (
    <input
      type="text"
      className="text-input"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    ></input>
  )
}

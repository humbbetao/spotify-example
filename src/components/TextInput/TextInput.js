import React from 'react'
import './textInput.css'

export default function TextInput({ value, onChange, placeholder = '' }) {
  return (
    <input
      type="text"
      className="text-input"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    ></input>
  )
}

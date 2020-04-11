import React from 'react'
import './textInput.css'

export default function TextInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="text-input"
      onChange={onChange}
      value={value}
      placeholder="Comece a escrever..."
    ></input>
  )
}

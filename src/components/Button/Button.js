import React from 'react'

export default function Button({ children, label, onClick }) {
  return <button onClick={onClick}>{children || label}</button>
}

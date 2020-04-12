import React from 'react'
import './label.css'

export default function Label({ children = null, className, onClick }) {
  return (
    <label onClick={onClick} className={className}>
      {children}
    </label>
  )
}

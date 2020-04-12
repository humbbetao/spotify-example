import React from 'react'
import './label.css'

export default function Label({ children = null, className }) {
  return <label className={className}>{children}</label>
}

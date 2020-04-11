import React from 'react'
import './label.css'

export default function Label({ children, color }) {
  return <label className={color}>{children}</label>
}

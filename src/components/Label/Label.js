import React from 'react'
import './label.css'

export default function Label({ children = null, color }) {
  return <label className={color}>{children}</label>
}

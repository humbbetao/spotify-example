import React from 'react'
import './p.css'
export default function P({ children = null, className }) {
  return <p className={className}>{children}</p>
}

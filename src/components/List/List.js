import React from 'react'
import Song from 'components/Song'
import Label from 'components/Label'
import './list.css'
export default function List({ title }) {
  return (
    <section>
      <Label>{title}</Label>
      <ul>
        {Array.from(new Array(5)).map((item, id) => (
          <Song key={id}></Song>
        ))}
      </ul>
    </section>
  )
}

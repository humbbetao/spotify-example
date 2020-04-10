import React, { useState } from 'react'
import TextInput from 'components/TextInput'
import './home.css'

import List from 'components/List'

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <TextInput></TextInput>
      </header>
      <article>
        <List />
      </article>
    </React.Fragment>
  )
}

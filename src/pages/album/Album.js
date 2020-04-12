import React, { useEffect } from 'react'
import './album.css'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import Label from 'components/Label'
import Article from 'components/Article'
import { useSelector } from 'react-redux'

export default function Album(props) {
  return (
    <main>
      <Sidebar></Sidebar>
      <Article>
        <Label>asdkjasdjnasjkdnas</Label>
        {/* <Browser></Browser> */}
      </Article>
    </main>
  )
}

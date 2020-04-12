import React, { useEffect } from 'react'
import './album.css'
import Browser from 'components/Browser'
import Sidebar from 'components/Sidebar'
import Label from 'components/Label'
import Article from 'components/Article'
import SongBig from 'components/SongBig'

import mock from './mock'
import mockAlbum from 'components/List/mock'
import { useSelector } from 'react-redux'
import SongList from 'components/SongList'

export default function Album({ getSongs }) {
  const album = useSelector(state => state.album)
  return (
    <main>
      <Sidebar></Sidebar>
      <Article>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SongBig album={mockAlbum.albums.items[1]}></SongBig>
          <SongList songs={mock.tracks.items}></SongList>
        </div>
      </Article>
    </main>
  )
}

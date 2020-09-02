import React from 'react'
import Map from './../Map/Map'
import Player from './../Player/Player'
import styled from '@emotion/styled'

const WorldArea = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  margin: 20px auto;
`

const World = () => {
  return (
    <WorldArea>
      <Map />
      <Player />
    </WorldArea>
  )
}

export default World

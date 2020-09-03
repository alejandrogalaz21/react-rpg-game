import React, { useState, useEffect } from 'react'
import Map from './../Map/Map'
import Player from './../Player/Player'
import styled from '@emotion/styled'
import { socket } from './../../socket'

const WorldArea = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  margin: 20px auto;
`

const World = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    socket.on('new_connection', connections => {
      setPlayers(connections)
    })
  }, [players])

  return (
    <WorldArea>
      <Map />
      {players.map(player => (
        <Player key={player} />
      ))}
    </WorldArea>
  )
}

export default World

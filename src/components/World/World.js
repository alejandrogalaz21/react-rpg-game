import React, { useState, useEffect } from 'react'
import Map from './../Map/Map'
import Player from './../Player/Player'
import styled from '@emotion/styled'
import { socket } from './../../socket'
import Sprite from '../Player/Sprite'

const WorldArea = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  margin: 20px auto;
`

const World = () => {
  const [players, setPlayers] = useState([])

  const getPlayers = () => players

  useEffect(() => {
    socket.on('new_connection', connections => {
      setPlayers(connections.filter(con => con.id !== socket.id))
    })

    socket.on('disconnection', id => {
      const filtered = getPlayers().filter(player => player.id !== id)
      setPlayers(filtered)
    })

    socket.on('movement', player => {
      const updated = getPlayers().map(p => (p.id === player.id ? player : p))
      console.log({ updated })
      setPlayers(updated)
    })
  }, [players])

  useEffect(() => {
    console.log({ players })
  }, [players])

  return (
    <WorldArea>
      <Map />
      <Player />
      {players.map(player => (
        <Sprite key={player} position={player.position} />
      ))}
    </WorldArea>
  )
}

export default World

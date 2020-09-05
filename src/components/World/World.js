/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Map from './../Map/Map'
import Sprite from '../Player/Sprite'
import Player from './../Player/Player'
import { socket } from './../../socket'
import { connectPlayer, updatePlayer, disconnectPlayer } from './../Player/players.redux'

import newSound from './../../sounds/new.wav'

const World = ({ players, mapWidth, mapHeight, ...props }) => {
  useEffect(() => {
    socket.on('connect_player', payload => {
      new Audio(newSound).play()
      props.connectPlayer(payload)
    })
    socket.on('update_player', props.updatePlayer)
    socket.on('disconnect_player', props.disconnectPlayer)
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        width: `${mapWidth}px`,
        height: `${mapHeight}px`,
        margin: '20px auto'
      }}>
      <Map />
      <Player />
      {players.map(player => (
        <Sprite
          key={player}
          position={player.position}
          spriteLocation={player.spriteLocation}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({ players, map }) => ({
  players: players.filter(({ id }) => id !== socket.id),
  mapWidth: map.width,
  mapHeight: map.height
})
const mapDispatchToProps = { connectPlayer, updatePlayer, disconnectPlayer }
const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default withConnect(World)

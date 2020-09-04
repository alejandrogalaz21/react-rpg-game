/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import Map from './../Map/Map'
import Sprite from '../Player/Sprite'
import Player from './../Player/Player'
import { socket } from './../../socket'
import { connectPlayer, updatePlayer, disconnectPlayer } from './../Player/players.redux'

const WorldArea = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  margin: 20px auto;
`

const World = ({ players, ...props }) => {
  useEffect(() => {
    socket.on('connect_player', props.connectPlayer)
    socket.on('update_player', props.updatePlayer)
    socket.on('disconnect_player', props.disconnectPlayer)
  }, [])

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

const mapStateToProps = ({ players }) => ({
  players: players.filter(({ id }) => id !== socket.id)
})
const mapDispatchToProps = { connectPlayer, updatePlayer, disconnectPlayer }
const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default withConnect(World)

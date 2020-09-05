/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { store } from '../../App'
import { dispatchMove } from './player.redux'
import { socket } from '../../socket'
import Sprite from './Sprite'
import { getNewPosition, atteemptMove, getDirection } from './player.helper'

const Player = ({ position, matrix, ...props }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Handle key's
  function handleKeyDown(event) {
    event.preventDefault()
    const direction = getDirection(event.keyCode)
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(event.keyCode, oldPos)

    const poss = atteemptMove(newPos, oldPos, matrix)
    props.dispatchMove(poss, direction, () => socket.emit('update_player', poss))
  }

  return <Sprite position={position} />
}

const mapStateToProps = ({ player, map }) => ({ ...player, ...map })
const mapDispatchToProps = { dispatchMove: dispatchMove }

export default connect(mapStateToProps, mapDispatchToProps)(Player)

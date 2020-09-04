/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { store } from '../../App'
import { dispatchMove } from './player.redux'
import { socket } from '../../socket'
import Sprite from './Sprite'
import { getNewPosition, observeBoundaries, getDirection } from './player.helper'

const Player = ({ position, ...props }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Handle key's
  function handleKeyDown(event) {
    event.preventDefault()
    const oldPos = store.getState().player.position
    const direction = getDirection(event.keyCode)
    if (direction) {
      const newPos = observeBoundaries(getNewPosition(direction, oldPos), oldPos)
      props.dispatchMove(newPos, () => socket.emit('update_player', newPos))
    }
  }

  return <Sprite position={position} />
}

const mapStateToProps = ({ player }) => ({ ...player })
const mapDispatchToProps = { dispatchMove: dispatchMove }

export default connect(mapStateToProps, mapDispatchToProps)(Player)

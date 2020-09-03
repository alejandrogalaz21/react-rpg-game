import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { store } from '../../App'
import { dispatchMove } from './player.redux'
import { socket } from '../../socket'
import Sprite from './Sprite'
import { getNewPosition, observeBoundaries } from './player.helper'

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
    const moves = ['LEFT', 'UP', 'RIGHT', 'DOWN']
    const direction = moves[event.keyCode - 37]

    if (direction) {
      const newPos = getNewPosition(direction, oldPos)
      const limitedPos = observeBoundaries(newPos, oldPos)
      socket.emit('update_player', limitedPos)
      props.dispatchMove(limitedPos)
    }
  }

  return <Sprite position={position} />
}

const mapStateToProps = ({ player }) => ({ ...player })
const mapDispatchToProps = { dispatchMove: dispatchMove }

export default connect(mapStateToProps, mapDispatchToProps)(Player)

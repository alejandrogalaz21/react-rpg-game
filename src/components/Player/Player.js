/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { store } from '../../App'
import { dispatchMove } from './player.redux'
import { socket } from '../../socket'
import Sprite from './Sprite'
import {
  getNewPosition,
  atteemptMove,
  getDirection,
  getSpriteLocation,
  getWalkIndex
} from './player.helper'

const Player = ({ position, spriteLocation, matrix, width, height, ...props }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Handle key's
  function handleKeyDown(event) {
    event.preventDefault()
    // get data from the store
    const oldPos = store.getState().player.position
    const walkIndex = store.getState().player.walkIndex
    // get new props for the store
    const direction = getDirection(event.keyCode)
    const newWalkIndex = getWalkIndex(walkIndex)
    const newSpriteLocation = getSpriteLocation(direction, newWalkIndex)
    const newPos = getNewPosition(event.keyCode, oldPos)
    // set value's
    const poss = atteemptMove(newPos, oldPos, matrix, width, height)
    props.dispatchMove(poss, direction, newSpriteLocation, newWalkIndex, () =>
      socket.emit('update_player', {
        position: poss,
        direction,
        spriteLocation: newSpriteLocation,
        walkIndex: newWalkIndex
      })
    )
  }

  return <Sprite position={position} spriteLocation={spriteLocation} />
}

const mapStateToProps = ({ player, map }) => ({ ...player, ...map })
const mapDispatchToProps = { dispatchMove: dispatchMove }

export default connect(mapStateToProps, mapDispatchToProps)(Player)

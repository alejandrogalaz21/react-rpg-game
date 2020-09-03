import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import { store } from '../../App'
import { dispatchMove } from './player.redux'
import { getNewPosition, observeBoundaries } from './player.helper'

const Player = ({ position, ...props }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // handle key's
  function handleKeyDown(event) {
    event.preventDefault()
    const oldPos = store.getState().player.position
    let newPos = null
    let position = null
    switch (event.keyCode) {
      // left
      case 37:
        newPos = getNewPosition('LEFT', oldPos)
        position = observeBoundaries(newPos, oldPos)
        props.dispatchMove(position)
        break
      // up
      case 38:
        newPos = getNewPosition('UP', oldPos)
        position = observeBoundaries(newPos, oldPos)
        props.dispatchMove(position)
        break
      // right
      case 39:
        newPos = getNewPosition('RIGHT', oldPos)
        position = observeBoundaries(newPos, oldPos)
        props.dispatchMove(position)
        break
      // Down
      case 40:
        newPos = getNewPosition('DOWN', oldPos)
        position = observeBoundaries(newPos, oldPos)
        props.dispatchMove(position)
        break
      default:
        console.log(event.keyCode)
        break
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: position[1],
        left: position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: '0 0',
        width: '40px',
        height: '40px'
      }}
    />
  )
}

const mapStateToProps = ({ player }) => ({ ...player })
const mapDispatchToProps = {
  dispatchMove: dispatchMove
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)

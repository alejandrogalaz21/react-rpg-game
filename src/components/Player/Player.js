import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import { handleMovement } from './move'

function dispatchMove(position) {
  return {
    type: 'MOVE_PLAYER',
    payload: { position }
  }
}

const Player = ({ position, ...props }) => {
  const SPRITE_SIZE = 40
  function getNewPosition(direction) {
    const oldPos = position

    switch (direction) {
      case 'LEFT':
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
      case 'RIGHT':
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
      case 'UP':
        return [oldPos[0], oldPos[1] - SPRITE_SIZE]
      case 'DOWN':
        return [oldPos[0], oldPos[1] + SPRITE_SIZE]
      default:
        return oldPos
    }
  }

  // handle key's
  function handleKeyDown(event) {
    event.preventDefault()

    switch (event.keyCode) {
      // left
      case 37:
        console.log('left')
        return props.dispatchMove(getNewPosition('LEFT'))
      // up
      case 38:
        console.log('up')
        return props.dispatchMove(getNewPosition('UP'))
      // right
      case 39:
        console.log('right')
        return props.dispatchMove(getNewPosition('RIGHT'))
      // Down
      case 40:
        console.log('down')
        return props.dispatchMove(getNewPosition('DOWN'))
      default:
        return console.log(event.keyCode)
    }
  }

  window.addEventListener('keydown', event => {
    handleKeyDown(event)
  })

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

const mapStateToProps = ({ player }) => ({
  ...player
})

const mapDispatchToProps = {
  dispatchMove: dispatchMove
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)

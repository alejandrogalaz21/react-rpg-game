import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import { store } from '../../App'
import { dispatchMove } from './player.redux'
import { getNewPosition } from './player.helper'

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
    const SPRITE_SIZE = 40
    const oldPos = store.getState().player.position
    switch (event.keyCode) {
      // left
      case 37:
        return props.dispatchMove(getNewPosition('LEFT', oldPos, SPRITE_SIZE))
      // up
      case 38:
        return props.dispatchMove(getNewPosition('UP', oldPos, SPRITE_SIZE))
      // right
      case 39:
        return props.dispatchMove(getNewPosition('RIGHT', oldPos, SPRITE_SIZE))
      // Down
      case 40:
        return props.dispatchMove(getNewPosition('DOWN', oldPos, SPRITE_SIZE))
      default:
        return console.log(event.keyCode)
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

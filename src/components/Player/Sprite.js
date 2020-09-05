import React from 'react'
import defaultSprite from './player_walk.png'

export default function Sprite({ sprite, position, spriteLocation }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: position[1],
        left: position[0],
        backgroundImage: `url(${sprite})`,
        backgroundPosition: spriteLocation,
        width: '40px',
        height: '40px'
      }}
    />
  )
}

Sprite.defaultProps = {
  position: [0, 0],
  sprite: defaultSprite
}

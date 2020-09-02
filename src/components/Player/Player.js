import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'

const Player = ({ position }) => {
  return (
    <div
      style={{
        position: 'relative',
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Player)

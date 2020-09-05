import React from 'react'
import styled from '@emotion/styled'
import './map.css'

import tree from './tree.png'
import tree2 from './tree_2.png'
import rock from './rock.png'
import { SPRITE_SIZE } from './../../config'

function MapCell({ cell }) {
  function getCellSprite(sprite) {
    switch (sprite) {
      case 0:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundColor: '#28c76f'
        }
      case 1:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundImage: `url(${tree})`,
          backgroundColor: '#28c76f'
        }
      case 2:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundImage: `url(${rock})`,
          backgroundColor: '#28c76f'
        }

      default:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundImage: `url(${tree2})`,
          backgroundColor: '#28c76f'
        }
    }
  }

  return <div style={getCellSprite(cell)} />
}

function MapRow({ cells }) {
  return (
    <div className='map-row'>
      {cells.map(cell => (
        <MapCell cell={cell} />
      ))}
    </div>
  )
}

export default MapRow

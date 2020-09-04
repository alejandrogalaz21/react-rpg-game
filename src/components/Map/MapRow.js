import React from 'react'
import styled from '@emotion/styled'
import tree from './tree.png'
import tree2 from './tree2.png'
import { SPRITE_SIZE } from './../../config'

function MapCell({ cell }) {
  function getCellSprite(sprite) {
    switch (sprite) {
      case 0:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundColor: ' #28c76f'
        }
      case 1:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundColor: '#0396ff'
        }
      case 2:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundColor: '#7367f0'
        }

      default:
        return {
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          backgroundColor: ' #ce9ffc'
        }
    }
  }

  return <div style={getCellSprite(cell)} />
}

const Row = styled.div`
  border: 4px solid #f5f5f5df;
`

function MapRow({ cells }) {
  return (
    <Row>
      {cells.map(cell => (
        <MapCell cell={cell} />
      ))}
    </Row>
  )
}

export default MapRow

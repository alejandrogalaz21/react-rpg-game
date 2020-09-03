import { SPRITE_SIZE } from './../../config'

export function getNewPosition(direction, oldPos) {
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

export function observeBoundaries(oldPos, newPos) {}

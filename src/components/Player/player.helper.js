import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from './../../config'

export function getNewPosition(direction, oldPos) {
  switch (direction) {
    case 'LEFT':
      return observeBoundaries([oldPos[0] - SPRITE_SIZE, oldPos[1]], oldPos)
    case 'RIGHT':
      return observeBoundaries([oldPos[0] + SPRITE_SIZE, oldPos[1]], oldPos)
    case 'UP':
      return observeBoundaries([oldPos[0], oldPos[1] - SPRITE_SIZE], oldPos)
    case 'DOWN':
      return observeBoundaries([oldPos[0], oldPos[1] + SPRITE_SIZE], oldPos)
    default:
      return oldPos
  }
}

export function observeBoundaries(newPos, oldPos) {
  return newPos[0] >= 0 &&
    newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
    newPos[1] >= 0 &&
    newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    ? newPos
    : oldPos
}

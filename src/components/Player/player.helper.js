import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from './../../config'

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

export function observeBoundaries(newPos, oldPos) {
  return newPos[0] >= 0 &&
    newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
    newPos[1] >= 0 &&
    newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    ? newPos
    : oldPos
}

export function getDirection(keyCode) {
  const directions = ['LEFT', 'UP', 'RIGHT', 'DOWN']
  if (keyCode !== 37 && keyCode !== 38 && keyCode !== 39 && keyCode !== 40) {
    return directions[0]
  }
  return directions[keyCode - 37]
}

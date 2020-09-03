import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from './../../config'

export function getNewPosition(direction, oldPos) {
  switch (direction) {
    case 'LEFT':
      let newPosLeft = [oldPos[0] - SPRITE_SIZE, oldPos[1]]
      return observeBoundaries(newPosLeft, oldPos)
    case 'RIGHT':
      let newPosRIGHT = [oldPos[0] + SPRITE_SIZE, oldPos[1]]
      return observeBoundaries(newPosRIGHT, oldPos)
    case 'UP':
      let newPosUP = [oldPos[0], oldPos[1] - SPRITE_SIZE]
      return observeBoundaries(newPosUP, oldPos)
    case 'DOWN':
      let newPosDOWN = [oldPos[0], oldPos[1] + SPRITE_SIZE]
      return observeBoundaries(newPosDOWN, oldPos)
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

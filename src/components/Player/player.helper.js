import player from 'play-sound'
import stop from './../../sounds/stop.wav'
import jump from './../../sounds/jump.wav'
import step from './../../sounds/step.wav'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from './../../config'

const p = player()

export function getNewPosition(keyCode, oldPos) {
  const direction = getDirection(keyCode)
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

export function observeBoundaries(newPos) {
  return (
    newPos[0] >= 0 &&
    newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
    newPos[1] >= 0 &&
    newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
  )
}

export function getDirection(keyCode) {
  const directions = ['LEFT', 'UP', 'RIGHT', 'DOWN']
  if (keyCode !== 37 && keyCode !== 38 && keyCode !== 39 && keyCode !== 40) {
    return directions[0]
  }
  return directions[keyCode - 37]
}

export function observeCell(newPos, matrix) {
  const row = newPos[1] / SPRITE_SIZE
  const cel = newPos[0] / SPRITE_SIZE
  const nextCel = matrix[row][cel]
  return nextCel === 0
}

export function atteemptMove(newPos, oldPos, matrix) {
  if (observeBoundaries(newPos) && observeCell(newPos, matrix)) {
    new Audio(step).play()
    return newPos
  }
  new Audio(stop).play()
  return oldPos
}

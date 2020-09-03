export function getNewPosition(direction, oldPos, SPRITE_SIZE) {
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

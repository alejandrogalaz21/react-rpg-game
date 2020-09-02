import configureStore from './../../redux/configureStore'
const store = configureStore()

console.log(store)

const SPRITE_SIZE = 40
export function handleMovement(player) {
  // get the new position from the sprite
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position

    switch (direction) {
      case 'LEFT':
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
      case 'RIGHT':
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
      case 'UP':
        return [oldPos[0], oldPos[1] - SPRITE_SIZE]
      case 'DOWN':
        return [oldPos[0], oldPos[1] + SPRITE_SIZE]
    }
  }

  // dispatch the new position
  function dispatchMove(direction) {
    const position = getNewPosition(direction)
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: { position }
    })
  }

  // handle key's
  function handleKeyDown(event) {
    event.preventDefault()

    switch (event.keyCode) {
      // left
      case 37:
        console.log('left')
        return dispatchMove('LEFT')
      // up
      case 38:
        console.log('up')
        return dispatchMove('UP')
      // right
      case 39:
        console.log('right')
        return dispatchMove('RIGHT')
      // Down
      case 40:
        console.log('down')
        return dispatchMove('DOWN')
      default:
        return console.log(event.keyCode)
    }
  }

  window.addEventListener('keydown', event => {
    handleKeyDown(event)
  })

  return player
}

const INITIAL_STATE = {
  position: [0, 0]
}

export function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return { ...action.payload }
    default:
      return state
  }
}

export function dispatchMove(position, cb) {
  cb()
  return { type: 'MOVE_PLAYER', payload: { position } }
}

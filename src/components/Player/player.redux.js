const INITIAL_STATE = {
  position: [0, 0],
  direction: '',
  spriteLocation: '0px 0px',
  walkIndex: 0
}

export function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export function dispatchMove(position, direction, spriteLocation, walkIndex, cb) {
  cb()
  return { type: 'MOVE_PLAYER', payload: { position, direction, spriteLocation, walkIndex } }
}

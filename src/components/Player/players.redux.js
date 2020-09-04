const INITIAL_STATE = []

export function players(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case 'CONNECT_PLAYER':
      return [...payload]
    case 'DISCONNECT_PLAYER':
      const index = state.findIndex(p => p.id === payload)
      return [...state.slice(0, index), ...state.slice(index + 1)]
    case 'UPDATE_PLAYER':
      const player = payload
      return [...state.map(p => (p.id === player.id ? player : p))]
    default:
      return state
  }
}

export const connectPlayer = payload => ({ type: 'CONNECT_PLAYER', payload })
export const updatePlayer = payload => ({ type: 'UPDATE_PLAYER', payload })
export const disconnectPlayer = payload => ({ type: 'DISCONNECT_PLAYER', payload })

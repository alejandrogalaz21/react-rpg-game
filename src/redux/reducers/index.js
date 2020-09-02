import { combineReducers } from 'redux'
import { app } from './app.reducer'
import { player } from './../../components/Player/player.redux'

export default combineReducers({
  app,
  player
})

import { combineReducers } from 'redux'
import { player } from './../../components/Player/player.redux'
import { players } from './../../components/Player/players.redux'

export default combineReducers({ player, players })

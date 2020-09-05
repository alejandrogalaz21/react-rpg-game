import { combineReducers } from 'redux'
import { player } from './../../components/Player/player.redux'
import { players } from './../../components/Player/players.redux'
import { map } from './../../components/Map/map.redux'

export default combineReducers({ player, players, map })

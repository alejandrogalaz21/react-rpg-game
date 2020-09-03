import http from 'http'
import express from 'express'
import socketIo from 'socket.io'

const app = express()
const server = http.Server(app)
const io = socketIo(server)

let players = []

io.on('connection', function (socket) {
  console.log('+ New connection ' + socket.id)

  players.push({
    id: socket.id,
    position: [0, 0]
  })

  console.log(players)

  io.emit('new_connection', players)

  socket.on('movement', position => {
    console.log(`* ${socket.id} has moved to [${position[0]}, ${position[1]}]`)
    players = players.map(player =>
      player.id === socket.id ? { ...player, position } : player
    )
    socket.broadcast.emit('movement', players)
  })

  socket.on('disconnect', () => {
    console.log('- Disconnected ' + socket.id)
    players = players.filter(player => player.id !== socket.id)
    console.log(players)
    io.emit('disconnection', socket.id)
  })
})

server.listen(5000, () => {
  console.log('listening on *:5000')
})

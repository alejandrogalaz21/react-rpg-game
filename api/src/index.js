import http from 'http'
import express from 'express'
import socketIo from 'socket.io'

const app = express()
const server = http.Server(app)
const io = socketIo(server)

let players = []

io.on('connection', function (socket) {
  console.log('+ New connection ' + socket.id)

  players.push({ id: socket.id, position: [0, 0] })

  io.emit('connect_player', players)

  socket.on('update_player', data => {
    console.log(`* ${socket.id} change props`)
    console.log({ data })
    players = players.map(p => (p.id === socket.id ? { ...p, ...data } : p))
    socket.broadcast.emit('update_player', { id: socket.id, ...data })
  })

  socket.on('disconnect', () => {
    console.log('- Disconnected ' + socket.id)
    players = players.filter(player => player.id !== socket.id)
    io.emit('disconnect_player', socket.id)
  })
})

server.listen(5000, () => {
  console.log('listening on *:5000')
})

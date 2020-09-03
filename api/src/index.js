import http from 'http'
import express from 'express'
import socketIo from 'socket.io'

const app = express()
const server = http.Server(app)
const io = socketIo(server)

let players = []

io.on('connection', function (socket) {
  console.log('new connection')
  console.log(socket.id)

  players.push({
    id: socket.id,
    position: [0, 0]
  })

  io.emit('new_connection', players)

  socket.on('disconnect', data => {
    console.log('socket disconnect')
    console.log(socket.id)
    players = players.filter(player => player.id !== socket.id)
  })
})

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

server.listen(5000, () => {
  console.log('listening on *:5000')
})

const app = require('http').createServer()
const io = require('socket.io')(app)

// socket port 3003
app.listen(3003, function() {
  console.log('socket is starting')
})

io.on('connection', function(socket) {
  console.log('connect')
})

// let room = 0
const staff = io.of('/staff')
  .on('connection', function(socket) {
    console.log('> staff is connected')
    // socket.join('room_' + (++room))

    // console.log('room > ' + room)
    // console.log('room- > ' + (room - 1))
    // staff.to('room_' + (room - 1)).emit('message', 'has someone join')

    socket.on('chat', function (msg) {
      console.log('s> ' + msg)
      staff.emit('message', msg)
    })
  })

const user = io.of('/user')
  .on('connection', function(socket) {
    console.log('> user is connected')

    socket.on('chat', function(msg) {
      console.log('u> ' + msg)
      user.emit('message', msg)
    })
  })
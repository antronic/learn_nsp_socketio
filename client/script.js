const man = new io.Manager('http://127.0.0.1:3003')

const staff = man.socket('/staff')
const user = man.socket('/user')

function createBubble(msg) {
  const div = document.createElement('DIV')
  div.className = 'bubble'
  const span = document.createElement('SPAN')
  const txt = document.createTextNode(msg)
  span.appendChild(txt)
  div.appendChild(span)

  return div
}

function tStaff(msg) {
  staff.emit('chat', msg)
}

function tUser(msg) {
  user.emit('chat', msg)
}

staff.on('message', function(msg) {
  document.querySelector('.chat_staff').appendChild(createBubble(msg))
})
user.on('message', function(msg) {
  document.querySelector('.chat_user').appendChild(createBubble(msg))
})
const socket = io()

const chat = document.querySelector('.chat-form')
const chatInput = document.querySelector('.chat-input')
chat.addEventListener('submit', e => {
  e.preventDefault()
  socket.emit('chat', chatInput.value)
  chatInput.value = ''
})

const isiChat = document.querySelector('.isi-chat')
const render = ({message, id})  => {
  const div = document.createElement('div')
  div.classList.add('chat-message')
  if (id === socket.id) { 
    div.classList.add('chat-message--user')
  }
  div.innerText = message 
  isiChat.appendChild(div)
}
socket.on('chat', data => {
  render(data)
})
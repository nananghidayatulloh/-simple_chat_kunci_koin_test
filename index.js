const express = require('express')
const app = express()
const server = require('http').createServer(app)
const path = require('path')

app.use(
  express.static( path.join(__dirname, '/static') )
)

app.get('/', (req, res, next) => {
    res.send('<h1>Hallo Bos</h1>')
})
const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log('listening on: ', port)
})
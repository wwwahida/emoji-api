const express = require('express')
const app = express()
const emojis = require('./routes/emojiRoutes')

app.use(express.json())
app.use('/emojis', emojis)

app.get('/', (req, res) => {
  res.send('emoji galore')
})

module.exports = app
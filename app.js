const express = require('express')
const cors = require('cors')
const app = express()
const emojis = require('./routes/emojiRoutes')

app.use(cors())
app.use(express.json())
app.use('/emojis', emojis)

app.get('/', (req, res) => {
  res.send('emoji galore')
})

module.exports = app
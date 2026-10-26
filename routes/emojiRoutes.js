const express = require('express')
const router = express.Router()
const emojis = require('../controllers/emojiControllers')

router.get('/', emojis.index)

module.exports = router
const express = require('express')
const router = express.Router()
const emojis = require('../controllers/emojiControllers')

router.get('/', emojis.index)
router.get('/:name', emojis.show)

module.exports = router
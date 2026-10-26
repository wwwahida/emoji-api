const express = require('express')
const router = express.Router()
const emojis = require('../controllers/emojiControllers')

router.get('/', emojis.index)
router.get('/:name', emojis.show)
router.patch('/:name', emojis.update)
router.post('/', emojis.create)

module.exports = router
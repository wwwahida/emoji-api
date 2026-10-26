const Emoji = require('../models/EmojiModel')

const index = async (req, res) => {
    try {
        const emojis = await Emoji.showAll()
        res.status(200).send(emojis)
    } catch (error) {
        res.status(500).send({ error : "server error"})
    }
}

module.exports = {
    index
}
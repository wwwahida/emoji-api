const Emoji = require('../models/EmojiModel')

const index = async (req, res) => {
    try {
        const emojis = await Emoji.showAll()
        res.status(200).send(emojis)
    } catch (error) {
        res.status(500).send({ error : "server error"})
    }
}

const show = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const emoji = await Emoji.show(name)
        res.status(200).send(emoji)
    } catch (error) {
        res.status(404).send({ error: "emoji not found" })
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const emoji = await Emoji.show(name)
        const updatedEmoji = await emoji.update(newEmoji)
        res.status(200).send(updatedEmoji)
    } catch (error) {
        res.status(404).send({ error: "emoji not found" })
    }
}

module.exports = {
    index,
    show,
    update
}
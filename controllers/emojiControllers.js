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

const create = async (req, res) => {
    try {
        const newEmoji = await Emoji.create(req.body)
        res.status(201).send(newEmoji)
    } catch (error) {
        res.status(409).send({ error: "conflict" })
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const emoji = await Emoji.show(name)
        await emoji.destroy()
        res.status(204).send({ message: "emoji deleted" })
    } catch (error) {
        res.status(404).send({ error: "emoji not found" })
    }
}

module.exports = {
    index,
    show,
    update,
    create,
    destroy
}
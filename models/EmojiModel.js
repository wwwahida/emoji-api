const emojis = require('../emojis.json')

class Emoji {
    constructor(emoji) {
        this.name = emoji.name
        this.category = emoji.category
        this.group = emoji.group
        this.htmlCode = emoji.htmlCode
        this.unicode = emoji.unicode
    }

    static showAll() {
        return emojis.map(q => new Emoji(q))
    }

    static show(name) {
        const emoji = emojis.find(emoji => emoji.name.toLowerCase() === name.toLowerCase())
        if (emoji) {
            return new Emoji(emoji)
        } else {
            throw new Error('emoji not found')
        }
    }

    update(newEmoji) {
        const updateEmoji = emojis.find(emoji => emoji.name.toLowerCase() === this.name.toLowerCase())
        if (updateEmoji) {
            if (newEmoji.name) updateEmoji.name = newEmoji.name
            if (newEmoji.category) updateEmoji.category = newEmoji.category
            if (newEmoji.group) updateEmoji.group = newEmoji.group
            if (newEmoji.htmlCode) updateEmoji.htmlCode = newEmoji.htmlCode
            if (newEmoji.unicode) updateEmoji.unicode = newEmoji.unicode

            return new Emoji(updateEmoji)
        } else {
            throw ('emoji not found')
        }
    }

    static create(emojiData) {
        const newEmoji = emojiData
        if (!emojiData.name) {
            throw 'name is required'
        }

        const existingEmoji = emojis.find(emoji => emoji.name.toLowerCase() === newEmoji.name.toLowerCase())
        if (existingEmoji) {
            throw 'emoji already exists'
        } else {
            emojis.push(newEmoji)
            return new Emoji(newEmoji)
        }
    }

    destroy() {
        const index = emojis.indexOf(emoji => emoji.name.toLowerCase() === this.name.toLowerCase())
        if (index) {
            emojis.splice(index, 1)
        } else {
            throw 'emoji not found'
        }
    }
}

module.exports = Emoji
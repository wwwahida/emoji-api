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
}

module.exports = Emoji
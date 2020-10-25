export default class PenguinLoader {

    constructor() {
        this.colors = [
            0x003366,0x009900, 0xFF3399, 0x333333, 0xCC0000, 0xFF6600, 0xFFCC00,
            0x660099, 0x996600, 0xFF6666, 0x006600, 0x0099CC, 0x8AE302, 0xF0F0D8
        ]

        this.nameStyle = {
            fontFamily: 'Arial',
            fontSize: 23,
            color: '#000000',
            align: 'center'
        }
    }

    loadPenguin(penguin) {
        let items = this.getItems(penguin.data)

        this.addPenguin(penguin)
        this.addShadow(penguin)
        this.addRing(penguin)
    }

    addPenguin(penguin) {
        this.loadSprite(penguin, 'penguin-body', 1)
        this.loadSprite(penguin, 'penguin', 2)
    }

    addShadow(penguin) {
        let shadow = penguin.scene.add.sprite(0, 0, 'penguin-base', 'shadow')
        penguin.addAt(shadow, 0)
    }

    addRing(penguin) {
        let ring = penguin.scene.add.sprite(0, 0, 'penguin-base', 'ring')
        penguin.addAt(ring, 0)
    }

    addName(penguin) {
        let x = penguin.x
        let y = penguin.y + 40
        let nameTag = penguin.scene.add.text(x, y, penguin.username, this.nameStyle)

        nameTag.setOrigin(0.5)

        return nameTag
    }

    loadSprite(penguin, id, depth) {
        id = String(id)
        console.log(id)

        let sprite = penguin.scene.add.sprite(0, 0, id, '1_1')

        if (id == 'penguin-body') sprite.tint = this.colors[penguin.data.color - 1]

        penguin.addAt(sprite, depth)
    }

    getItems({ feet, body, neck, hand, face, head }) {
        return { feet, body, neck, hand, face, head }
    }

}
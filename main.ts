namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile3 = img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `
    //% blockIdentity=images._tile
    export const tile7 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
let mySprite: Sprite = null
let direction = 0
let direction2: TileDirection = TileDirection.Top
tiles.setTilemap(tiles.createTilemap(
    hex`1000100001010101010101010101010101010101010200000000000000000000000001010100010001000100010001000100010101000100010001000100010001000101010001000100010001000100010001010100010001000100010001000100010101000100010001000100010001000101010000000000000000000000000001010100010001000100010001000100010101000100010001000100010001000101010001000100010001000100010001010100010001000100010001000100010101000100010001000100010001000101010001000100010001000100010001010100000000000000000000000000010101010101010101010101010101010101`,
    img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 . . . . . . . . . . . . . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . . . . . . . . . . . . . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2
                2 . . . . . . . . . . . . . 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
    [myTiles.tile0, sprites.builtin.brick, myTiles.tile3, myTiles.tile7],
    TileScale.Sixteen
))
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
let myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f . . . . . . . . . .
    . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
    . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
    . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . .
    . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
    . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
    . . . . . . f d d d 1 1 1 1 d d d f . . . . . .
    . . . . . . f b d b f d d f b d b f . . . . . .
    . . . . . . f c d c f 1 1 f c d c f . . . . . .
    . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
    . . . . . . f f f c d b 1 b d f f f f . . . . .
    . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . .
    . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . .
    . . . . f b f b f f f f f f b f b f b f . . . .
    . . . . . . . . . f f f f f f . . . . . . . . .
    . . . . . . . . . . . f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Enemy)
tiles.placeOnRandomTile(myEnemy, myTiles.tile3)
myEnemy.setFlag(SpriteFlag.ShowPhysics, false)
scene.cameraFollowSprite(mySprite)
function chooseDirection() {
    while (true) {
        let random = Math.randomRange(0, 8)
        switch (random) {
            case 0:
                direction2 = TileDirection.Left
                break
            case 1:
                direction2 = TileDirection.Right
                break
            case 2:
                direction2 = TileDirection.Top
                break
            case 3:
                direction2 = TileDirection.Bottom
                break
            default:
                break
        }
        // let direction2: TileDirection = Math.randomRange(0, 3)
        if (!myEnemy.tileKindAt(direction2, sprites.builtin.brick)) {
            return direction2;
        }
    }
}
function setDirection(direction: TileDirection) {
    if (direction == TileDirection.Right) {
        myEnemy.x += 16
    } else if (direction == TileDirection.Left) {
        myEnemy.x -= 16
    } else if (direction == TileDirection.Bottom) {
        myEnemy.y += 16
    } else if (direction == TileDirection.Top) {
        myEnemy.y -= 16
    }
}
game.onUpdateInterval(500, function () {
    setDirection(chooseDirection())
    tiles.setTileAt(tiles.getTileLocation(myEnemy.x / 16, myEnemy.y / 16), myTiles.tile7)
})

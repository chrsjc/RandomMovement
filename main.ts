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
}
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
	
})
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010000000000000000000000000001010100010001000100010001000100010101000100010001000100010001000101010001000100010001000100010001010100010001000100010001000100010101000100010001000100010001000101010000000000000000000000000001010100010001000100010001000100010101000100010001000100010001000101010001000100010001000100010001010100010001000100010001000100010101000100010001000100010001000101010001000100010001000100010001010100000000000000000000000000010101010101010101010101010101010101`,
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
            [myTiles.tile0,sprites.builtin.brick],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
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
mySprite.setVelocity(50, 50)
let direction = 0
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(100, function () {
    if (direction == 0) {
        if (mySprite.tileKindAt(TileDirection.Right, sprites.builtin.brick)) {
            direction = Math.randomRange(0, 3)
        } else {
            mySprite.setVelocity(50, 0)
        }
    } else if (direction == 1) {
        if (mySprite.tileKindAt(TileDirection.Left, sprites.builtin.brick)) {
            direction = Math.randomRange(0, 3)
        } else {
            mySprite.setVelocity(-50, 0)
        }
    } else if (direction == 2) {
        if (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.brick)) {
            direction = Math.randomRange(0, 3)
        } else {
            mySprite.setVelocity(0, 50)
        }
    } else if (direction == 3) {
        if (mySprite.tileKindAt(TileDirection.Top, sprites.builtin.brick)) {
            direction = Math.randomRange(0, 3)
        } else {
            mySprite.setVelocity(0, -50)
        }
    }
})

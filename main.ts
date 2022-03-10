namespace SpriteKind {
    export const Person = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    GUY.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 f 1 1 f 1 1 f 1 1 f . . 
        . . f f . f f . f f . f f . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    GUY.setImage(img`
        . . . f f f f f f . . . . . . . 
        . . f 1 1 1 1 1 f f . . . . . . 
        . f 1 1 1 1 1 1 1 f f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 1 1 1 f . . . . . 
        . f 1 1 1 1 1 1 1 1 f . . . . . 
        . . f 1 f 1 f 1 f 1 f . . . . . 
        . . . f . f . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    GUY.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . . f f 1 1 1 1 1 f . . . 
        . . . . f f 1 1 1 1 1 1 1 f . . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 f . . 
        . . . . f 1 f 1 f 1 f 1 f . . . 
        . . . . . f . f . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
    music.buzzer.playUntilDone()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    GUY.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . f 1 f 1 1 f 1 f 1 1 f 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 f 1 1 f 1 1 f 1 1 f . . 
        . . f f . f f . f f . f f . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    game.over(true, effects.melt)
})
let GUY: Sprite = null
GUY = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f 1 1 1 1 1 1 1 f . . . . . 
    . f 1 1 1 1 1 1 1 1 1 f . . . . 
    f 1 1 f f 1 1 1 f f 1 1 f . . . 
    f 1 f 1 1 f 1 f 1 1 f 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 f 1 1 f 1 1 f 1 1 f . . . 
    . f f . f f . f f . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(GUY, 55, 55)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(GUY, tiles.getTileLocation(3, 7))
scene.cameraFollowSprite(GUY)
let NOT_GUY = sprites.create(img`
    .......................
    .......................
    .......................
    ....fffffffff..........
    ...f222222222f.........
    ..f22222222222f........
    ..f22222222222f........
    .fffff22222222ffff.....
    f66666f2222222f22f.....
    f66666f2222222f22f.....
    .fffff22222222f22f.....
    ..f22222222222f22f.....
    ..f22222222222f22f.....
    ..f22222222222f22f.....
    ..f22222222222f22f.....
    ..f222ffffff22ffff.....
    ..f2222f.f2222f........
    ..ffffff.ffffff........
    .......................
    .......................
    .......................
    .......................
    .......................
    `, SpriteKind.Enemy)
tiles.placeOnTile(NOT_GUY, tiles.getTileLocation(5, 6))
NOT_GUY.follow(GUY, 40)
forever(function () {
    music.playMelody("E C D E D E G F ", 147)
})

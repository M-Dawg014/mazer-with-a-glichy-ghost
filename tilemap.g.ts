// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202040404040404040402020202020202030402020202020204020202020204040404020202010402040402020202040202020202020404020204040202020404020202020203040202020202020203040402040402020402020202050204040402020404040404040404020202020204040203020202020203040202020202020402020202020202020402040402020304020204020202020204040403020404040404040404020202040202020202020402020202040404040402020202020204020204020202020304020202020202040402040402020202040202020202020402020403020404040402020202020304020204040404020202020202`, img`
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 . . . . 2 2 2 . . 2 . . . . . 
2 . 2 2 2 2 2 2 . . 2 2 . . 2 . 
2 . . 2 2 2 2 2 2 . 2 2 2 2 2 . 
2 2 . . 2 . . 2 2 . 2 2 2 2 . . 
. . . 2 2 . . . . . . . . 2 2 2 
2 2 . . 2 2 2 2 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 2 . 2 2 . 2 2 2 2 2 . . . 2 
2 . . . . . . . . 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . . . . . 2 2 2 
2 2 2 . 2 2 . 2 2 2 2 2 . 2 2 2 
2 2 2 . . 2 . . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 . 2 2 . . . . 2 2 2 
2 2 2 . 2 2 . . . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles12,sprites.dungeon.darkGroundCenter,sprites.dungeon.buttonOrange], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

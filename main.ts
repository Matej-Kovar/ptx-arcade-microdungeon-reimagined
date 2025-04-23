type Size = {
    width: number,
    height: number
}

const TileSize: Size = { width: 8, height: 8 }
const RenderSize: Size = {width: 16, height: 12}

namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 128
    export const ARCADE_SCREEN_HEIGHT = 96
}

const Tiles: Sprite[][] = []

function spriteSetReset(SpriteSet: Sprite[][], spriteToSet: Image) {
    let rowLenghts:Number[] = SpriteSet.map(row => row.length);
    //spriteSetInit(SpriteSet, spriteToSet, {height: SpriteSet.length, width: Math.max(...rowLenghts)})
}

function spriteSetInit(SpriteSet: Sprite[][], spriteToSet: Image, size: Size) {
    for (let i = 0; i < size.height; i++) {
        SpriteSet[i] = []
        for (let j = 0; j < size.width; j++) {
            SpriteSet[i][j] = sprites.create(spriteToSet)
            SpriteSet[i][j].setPosition((j + 0.5) * TileSize.width, (i + 0.5) * TileSize.height)
        }
    }
}

spriteSetInit(Tiles, assets.image`emptyTile0`, RenderSize);

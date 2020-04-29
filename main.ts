let projectile = undefined
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
. . . . . . . 5 5 5 5 . . . . . 
. . . . . . . 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 7 . 5 5 5 . . . . 
. . . . 5 5 5 7 . 5 5 5 . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(1000, function on_update_interval() {
    
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 . . . . . . . . . 
. . . . 5 f 5 5 5 . . . . . . . 
. . . . 5 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, Math.randomRange(-70, 70), Math.randomRange(-70, 70))
    projectile.lifespan = 2000
    if (projectile.vx > 0) {
        projectile.image.flipX()
    }
    
    if (projectile.vy > 0) {
        projectile.image.flipY()
    }
    
})

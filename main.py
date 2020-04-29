projectile = None
scene.set_background_color(9)
mySprite = sprites.create(img("""
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
"""),
    SpriteKind.player)
def on_update_interval():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
"""),
        mySprite,
        randint(-70, 70),
        randint(-70, 70))
    projectile.lifespan = 2000
    if projectile.vx > 0:
        projectile.image.flip_x()
    if projectile.vy > 0:
        projectile.image.flip_y()
game.on_update_interval(1000, on_update_interval)
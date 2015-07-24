
function preload () {
    // ...
    game.load.spritesheet('robot', 'assets/robot.png', 96, 202);
}

function create () {
    // ...
    robot.animations.add('right', [1, 2, 3, 4, 5, 6], 15, true);
    robot.animations.add('left', [13, 12, 11, 10, 9], 15, true);
    robot.animations.add('idle', [0], 10, true);
}
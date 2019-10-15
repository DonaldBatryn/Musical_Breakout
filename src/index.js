import MovingObject from './moving_object';
import Ball from './ball';
// import Brick from './brick';
import Game from './game';


document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    

    // let opts = { "pos": [100, 100], "vel": [10,10], "radius": 10, "color": "red" }
    // let testObject = new MovingObject(opts);
    // testObject.draw(ctx);

    // let brickOpts = { "color": "blue", "sound": "sound", "pos": [100,100], "game": "game"}
    // let testBrick = new Brick(brickOpts)
    // testBrick.draw(ctx)

    let game = new Game();
    game.addBricks();
    game.draw(ctx);
})
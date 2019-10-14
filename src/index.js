import MovingObject from './moving_object';
import Ball from './ball';
import Brick from './brick';


document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    

    // let opts = { "pos": [100, 100], "vel": [10,10], "radius": 10, "color": "red" }
    // let testObject = new MovingObject(opts);
    // testObject.draw(ctx);

    let testBrick = new Brick("green", "sound")
    testBrick.draw(ctx)
})
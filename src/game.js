import Brick from './brick';
import { randomColor } from './utils';
import Ball from './ball';

// set up some constants that pair a color to a sound
const COLORS = [
    "green",
    "pink",
    "yellow",
    "blue",
    "lightgray",
    "red",
    "orange",
    "violet",
    "purple",
    "gold",
    "lightblue"
]

class Game {
    constructor(){
        this.DIM_X = 900;
        this.DIM_Y = 650;
        this.NUM_BRICKS = 70;
        this.bricks = [];
        this.ball = new Ball(this);
        this.addBricks()
    }

    addBricks(){
        let brickX = 100;
        let brickY = 100;
        while (this.bricks.length < this.NUM_BRICKS) {
            let colorIndex = this.bricks.length % 11
            if (brickX === 800){
                brickX = 100
                brickY += 30
            }
            this.bricks.push(new Brick({
                "color": COLORS[colorIndex],
                "pos": [brickX, brickY],
                "sound": "sound"
            }, this))
            brickX += 70;
        }
    }

    draw(ctx){
        ctx.clearRect(0, 0, 900, 650);

        this.bricks.forEach(brick => {
            brick.draw(ctx)
        })
        this.ball.draw(ctx);
    }

    checkCollisions() {
        for (let i = 0; i < this.bricks.length; i++) {
            let currentBrick = this.bricks[i]
            if (this.ball.isCollidedWith(currentBrick)) {
                console.log("hit collide")

                currentBrick.collideWith();
            };
        }
    }

    step(ctx){
        this.ball.move(ctx)
        this.checkCollisions()
    }

    remove(brick){
        // let idx = this.bricks.indexOf(brick);
        // this.bricks.splice(idx, 1);
        console.log("hit remove")
    }
}

window.randomColor = randomColor;
window.Game = Game;

export default Game;
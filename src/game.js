import Brick from './brick';
import { randomColor } from './utils';
import Ball from './ball';
import Paddle from './paddle';
import { BRICK_AUDIO, BRICK_WORDS } from './audio';

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
        this.NUM_LIVES = 3;
        this.roundOver = false;
        this.score = 0;
        this.bricks = [];
        this.brickRotation = 1;
        this.ball = new Ball(this);
        this.addBricks();
        this.inMotion = false;
        this.paddle = new Paddle(this, this.ball); 
        this.paddleVel = [0, 0];
        this.win = false;
    }

    addBricks(){
        let brickX = 100;
        let brickY = 100;
        while (this.bricks.length < this.NUM_BRICKS) {
            let randNum = Math.floor(Math.random() * BRICK_AUDIO.length)
            let colorIndex = this.bricks.length % 11
            if (brickX === 800){
                brickX = 100
                brickY += 30
            }
            this.bricks.push(new Brick({
                "color": COLORS[colorIndex],
                "pos": [brickX, brickY],
                "sound": BRICK_AUDIO[randNum],
                "word": BRICK_WORDS[randNum]
            }, this))
            brickX += 70;
        }
    }

    drawBackground(ctx){
        // black background
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.rect(0, 0, 900, 650);
        ctx.stroke();
        ctx.fill();
        // white background
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.rect(10, 10, 880, 630);
        ctx.stroke();
        ctx.fill();
    }

    draw(ctx){ // took out pointerCtx
        ctx.clearRect(0, 0, 900, 650);
        this.drawBackground(ctx);
        this.bricks.forEach(brick => {
            brick.draw(ctx)
        })
        this.ball.draw(ctx);
        this.paddle.draw(ctx);
    }

    checkCollisions(ctx) {
        for (let i = 0; i < this.bricks.length; i++) {
            let currentBrick = this.bricks[i]
            if (this.ball.isCollidedWith(currentBrick)) {
                currentBrick.collideWith(ctx);
            } 
            if (this.ball.hitWall()) {
                this.ball.bounce()
            }
            if (this.ball.hitPaddle(this.paddle)){
                this.ball.paddleBounce(this.paddle)
            }
        }
    }

    step(ctx){ // took out pointerCtx
        this.ball.move(ctx)
        this.paddle.move(this.paddleVel, ctx)
        this.checkCollisions(ctx)
    }

    remove(brick){
        
        let idx = this.bricks.indexOf(brick);
        this.bricks.splice(idx, 1);
        this.score += 100;
        document.getElementById("score").innerHTML = `SCORE: ${this.score}`;
        if (this.bricks.length === 0){
            this.win = true
        }
        let currentX = this.ball.vel[0]
        let currentY = this.ball.vel[1]

        if (this.ball.pos[1] > (brick.pos[1] + brick.dims[1])){
            this.ball.vel = [currentX, -currentY]
            return
        }
        if (this.ball.pos[1] < brick.pos[1]) {
            this.ball.vel = [currentX, -currentY]
            return
        }
        if (this.ball.pos[0] < brick.pos[0]) {
            this.ball.vel = [-currentX, currentY]
            return
        }
        if (this.ball.pos[0] > (brick.pos[0] + brick.dims[0])) {
            this.ball.vel = [-currentX, currentY]
            return
        }
    }

    resetBallPaddle(ctx){
        this.inMotion = false;
        this.ball = [];
        this.paddle = [];
        this.ball = new Ball(this);
        this.paddle = new Paddle(this, this.ball, this.pointer);
        this.ball.draw(ctx);
        this.paddle.draw(ctx);
    }
}

window.randomColor = randomColor;
window.Game = Game;

export default Game;
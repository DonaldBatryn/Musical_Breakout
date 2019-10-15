
class Ball {
    constructor(game){
        this.pos = [450, 590];
        this.vel = [0, 0];
        this.radius = 8;
        this.color = "gray";
        this.game = game;
        this.isCollidedWith = this.isCollidedWith.bind(this)
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI,
            false
        )
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 10;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }

    move(ctx) {
        let x = this.pos[0] + this.vel[0];
        let y = this.pos[1] + this.vel[1];
        this.pos = [x, y]
        this.draw(ctx);
    }

    isCollidedWith(brick) {
        let brickX1 = brick.pos[0]
        let brickX2 = brick.pos[0] + brick.dims[0]
        let brickY1 = brick.pos[1]
        let brickY2 = brick.pos[1] + brick.dims[1]

        if (this.pos[0] + this.radius > brickX1 &&
            this.pos[0] - this.radius < brickX2 &&
            this.pos[1] + this.radius > brickY1 &&
            this.pos[1] - this.radius < brickY2) {
            return true;
        }
        return false;
    }

    launch() {
        if (this.game.inMotion) {
            return
        } else {
            this.game.inMotion = true
            this.vel = [-6, -3];
        }
    }

    hitWall(){
        if (this.pos[0] + this.radius >= 890){
            return true;
        }
        if (this.pos[0] - this.radius <= 10){
            return true;
        }
        if (this.pos[1] + this.radius >= 640){
            return true;
        }
        if (this.pos[1] - this.radius <= 10){
            return true;
        }
        
        return false;
    }

    hitPaddle(paddle){
        let paddleY = paddle.pos[1];
        let paddleStartX = paddle.pos[0];
        let paddleEndX = paddle.pos[0] + paddle.dims[0];
        let bottomBall = this.pos[1] + this.radius
        let rightBall = this.pos[0] + this.radius
        let leftBall = this.pos[0] - this.radius
        if ((bottomBall > paddleY - 4 && bottomBall < paddleY + 4) && (rightBall > paddleStartX && leftBall < paddleEndX)) {
       
            return true
        }
        return false;
    }

    bounce(){
        let currentXvel = this.vel[0];
        let currentYvel = this.vel[1];
        let currentXpos = this.pos[0];
        let currentYpos = this.pos[1];
        if (currentXvel > 0 && currentYvel > 0 && currentXpos < 890 && currentYpos > 635){
            //moving towards the right, bouncing on bottom
            //end round
        }
        if (currentXvel > 0 && currentYvel > 0 && currentXpos > 885 && currentYpos < 640){
            // moving towards lower-right, bouncing on right wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel > 0 && currentYvel < 0 && currentXpos > 885 && currentYpos < 640){
            // moving towards upper right, bouncing on right wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel < 0 && currentYvel < 0 && currentXpos < 15 && currentYpos < 640) {
            // moving towards upper-left, bouncing on left wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel < 0 && currentYvel > 0 && currentXpos < 15 && currentYpos < 640) {
            // moving towards lower-left, bouncing on left wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel > 0 && currentYvel < 0 && currentXpos < 890 && currentYpos < 15){
            // moving towards upper right, bouncing on upper wall
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel < 0 && currentYvel < 0 && currentXpos < 890 && currentYpos < 15) {
            // moving towards upper left, bouncing on upper wall
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel === 0 && currentYvel < 0){
            // moving straight up
            this.vel = [currentXvel, -currentYvel]
        }
       
    }

    paddleBounce(){
        let currentXvel = this.vel[0];
        let currentYvel = this.vel[1];
        let currentXpos = this.pos[0];
        let currentYpos = this.pos[1];
        if (currentXvel === 0 && currentYvel > 0) {
            // hit paddle moving straight down
            console.log('hit paddle moving down')
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel > 0 && currentYvel > 0) {
            // hit paddle moving down-right
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel < 0 && currentYvel > 0) {
            // hit paddle moving down-left
            this.vel = [currentXvel, -currentYvel]
        }
    }
}

window.Ball = Ball;

export default Ball;

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

    // launch() {
    //     if (this.game.inMotion) {
    //         return
    //     } else {
    //         this.game.inMotion = true;
    //         this.game.aiming = false;
    //         this.vel = [0, -5];
    //     }
    // }

    launch(clickPos){
        // split x down middle (450), if its 450, X is 0
        // if its near 0
        if (this.game.inMotion){
            return
        } else {
            let ballXPos = this.pos[0]
            let velX;
            let velY;
            if (clickPos[0] >= ballXPos - 837 && clickPos[0] <= ballXPos - 775){
                velX = -10;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 775 && clickPos[0] <= ballXPos - 700){
                velX = -9;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 700 && clickPos[0] <= ballXPos - 675){
                velX = -8;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 675 && clickPos[0] <= ballXPos - 600){
                velX = -7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 600 && clickPos[0] <= ballXPos - 525){
                velX = -7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 525 && clickPos[0] <= ballXPos - 450) {
                velX = -6;
                velY = -3;
            }

            if (clickPos[0] > ballXPos - 450 && clickPos[0] <= ballXPos - 375){
                velX = -6;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 375 && clickPos[0] <= ballXPos - 300) {
                velX = -5;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 300 && clickPos[0] <= ballXPos - 225){
                velX = -4;
                velY = -4;
            }
            if (clickPos[0] > ballXPos - 225 && clickPos[0] <= ballXPos - 150){
                velX = -3;
                velY = -4;
            }
            if (clickPos[0] > ballXPos - 150 && clickPos[0] <= ballXPos - 75) {
                velX = -2;
                velY = -4;
            }
            if (clickPos[0] > ballXPos - 75 && clickPos[0] < ballXPos - 10) {
                velX = -1;
                velY = -5;
            }
            if (clickPos[0] < ballXPos + 10 && clickPos[0] > ballXPos - 10) {
                velX = 0;
                velY = -5;
            }
            if (clickPos[0] > ballXPos + 10 && clickPos[0] < ballXPos + 75) {
                velX = 1;
                velY = -5;
            }
            if (clickPos[0] > ballXPos + 75 && clickPos[0] < ballXPos + 150) {
                velX = 2;
                velY = -4;
            }
            if (clickPos[0] > ballXPos + 150 && clickPos[0] < ballXPos + 225) {
                velX = 3;
                velY = -4;
            }
            if (clickPos[0] > ballXPos + 225 && clickPos[0] < ballXPos + 300) {
                velX = 4;
                velY = -4;
            }
            if (clickPos[0] > ballXPos + 300 && clickPos[0] < ballXPos + 375) {
                velX = 5;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 375 && clickPos[0] < ballXPos + 450) {
                velX = 6;
                velY = -3;
            }
            // new
            if (clickPos[0] > ballXPos + 450 && clickPos[0] <= ballXPos + 525) {
                velX = 6;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 525 && clickPos[0] <= ballXPos + 600) {
                velX = 7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 600 && clickPos[0] <= ballXPos + 675) {
                velX = 7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 675 && clickPos[0] <= ballXPos + 750) {
                velX = 8;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 750 && clickPos[0] <= ballXPos + 825) {
                velX = 9;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 825 && clickPos[0] <= ballXPos + 837) {
                velX = 10;
                velY = -3;
            }
            this.game.inMotion = true;
            this.game.aiming = false;
            this.vel = [velX, velY];
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

        if (currentYpos > 637 && currentYpos < 653) {
            this.game.roundOver = true;
            this.vel = [0, 0]
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

    paddleBounce(paddle){
        let currentXvel = this.vel[0];
        let currentYvel = this.vel[1];
        let ballBottomX = this.pos[0];
        let thirdSegment = paddle.dims[0] / 3

        // left paddle segment makes the balls X velocity decrease when hit dead on or from the right
        // or neutralized when hit from the left
        if (currentXvel === 0 && currentYvel > 0 && (ballBottomX < paddle.pos[0] + thirdSegment)) {
            // hit paddle moving straight down
            this.vel = [-2, -currentYvel];
        }
        if (currentXvel > 0 && currentYvel > 0 && (ballBottomX < paddle.pos[0] + thirdSegment)) {
            // hit paddle moving down-right
            this.vel = [currentXvel - 2, -currentYvel];
        }
        if (currentXvel < 0 && currentYvel > 0 && (ballBottomX < paddle.pos[0] + thirdSegment)) {
            // hit paddle moving down-left
            this.vel = [currentXvel - 3, -currentYvel];
        }

        //  center paddle segment bounces the ball at the same rate it was hit at
        if (currentXvel === 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + thirdSegment && ballBottomX < (paddle.pos[0] + paddle.dims[0]) - thirdSegment)) {
            // hit paddle moving straight down
            this.vel = [currentXvel - 1, -currentYvel]
        }
        if (currentXvel > 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + thirdSegment && ballBottomX < (paddle.pos[0] + paddle.dims[0]) - thirdSegment)) {
            // hit paddle moving down-right
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel < 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + thirdSegment && ballBottomX < (paddle.pos[0] + paddle.dims[0]) - thirdSegment)) {
            // hit paddle moving down-left
            this.vel = [currentXvel, -currentYvel]
        }

        // right paddle segment makes the balls X velocity increase when hit dead on or from the left
        // or neutralized when hit from the right
        if (currentXvel === 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + (thirdSegment * 2) && ballBottomX < (paddle.pos[0] + paddle.dims[0]))) {
            // hit paddle moving straight down
            this.vel = [2, -currentYvel]
        }
        if (currentXvel > 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + (thirdSegment * 2) && ballBottomX < (paddle.pos[0] + paddle.dims[0]))) {
            // hit paddle moving down-right
            this.vel = [currentXvel + 2, -currentYvel]
        }
        if (currentXvel < 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + (thirdSegment * 2) && ballBottomX < (paddle.pos[0] + paddle.dims[0]))) {
            // hit paddle moving down-left
            this.vel = [currentXvel + 3, -currentYvel]
        }
        
    }
}

window.Ball = Ball;

export default Ball;

class Ball {
    constructor(game){
        this.pos = [450, 590];
        this.vel = [0, 0];
        this.radius = 8;
        this.color = "black";
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

        if (this.pos[0] + this.radius > brickX1) {
            return true;
        }
        if (this.pos[0] - this.radius < brickX2) {
            return true;
        }
        if (this.pos[1] + this.radius > brickY1) {
            return true;
        }
        if (this.pos[1] - this.radius < brickY2) {
            return true;
        }
        return false;
    }

    launch() {
        // let x = this.vel[0] + impulse[0]
        // let y = this.vel[1] + impulse[1]
     
        this.vel = [0, -11];
    }
}

window.Ball = Ball;

export default Ball;

class MovingObject {
    constructor(options){
        this.pos = options["pos"];
        this.vel = options["vel"];
        this.radius = options["radius"];
        this.color = options["color"];
        this.game = options["game"];
    }

    draw(ctx){
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

    move(ctx){
        let x = this.pos[0] + this.vel[0];
        let y = this.pos[1] + this.vel[1];
        // this.pos = this.game.wrap([x, y]);

        this.draw(ctx);
    }

    isCollidedWith(brick){
        let brickX1 = brick.pos[0]
        let brickX2 = brick.pos[0] + brick.dims[0]
        let brickY1 = brick.pos[1]
        let brickY2 = brick.pos[1] + brick.dims[1]
       
        if (this.pos[0] + this.radius > brickX1){
            return true;
        }
        if (this.pos[0] - this.radius < brickX2){
            return true;
        }
        if (this.pos[1] + this.radius > brickY1){
            return true;
        }
        if (this.pos[1] - this.radius < brickY2){
            return true;
        }
        return false;
    }
}

window.MovingObject = MovingObject;

export default MovingObject;

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

    isCollidedWith(otherObject){
        // check if two objs are radius*2 or closer?
        let radiusSum = (this.radius + otherObject.radius);

        let distBetween = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
        if (distBetween <= radiusSum) {
            return true;
        } else {
            return false;
        };
    }
}

window.MovingObject = MovingObject;

export default MovingObject;
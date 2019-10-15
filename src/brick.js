

class Brick {
    constructor(options, game){
        this.color = options["color"];
        this.sound = options["sound"];
        this.pos = options["pos"];
        this.dims = [70, 30]
        this.game = game;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.rect(this.pos[0], this.pos[1], this.dims[0], this.dims[1]);
        ctx.stroke();
        ctx.fill();
    }
}

window.Brick = Brick;

export default Brick;
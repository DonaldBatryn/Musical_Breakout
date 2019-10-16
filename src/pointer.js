
class Pointer {
    constructor(game, ball){
        this.game = game;
        this.ball = ball;
        this.pos = [449, 420];
        this.dims = [2, 150];
    }

    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.rect(this.pos[0], this.pos[1], this.dims[0], this.dims[1]);
        ctx.stroke();
        ctx.fill();
    }

    rotatePointer(angle){
        
    }
}

export default Pointer;
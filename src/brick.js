

class Brick {
    constructor(color, sound){
        this.color = color;
        this.sound = sound;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.rect(50, 50, 50, 20);
        ctx.stroke();
        ctx.fill();
    }
}

window.Brick = Brick;

export default Brick;


class Brick {
    constructor(options, game){
        this.color = options["color"];
        this.sound = options["sound"];
        this.pos = options["pos"];
        this.dims = [65, 25]
        this.game = game;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.rect(this.pos[0], this.pos[1], this.dims[0], this.dims[1]);
        ctx.stroke();
        ctx.fill();
    }

    collideWith(ctx) {
        this.game.remove(this);
        let player1 = document.getElementById("audio-1");
        let player2 = document.getElementById("audio-2");
        let player4 = document.getElementById("audio-4");
        if (player1.duration > 0 && !player1.paused){
            if (player2.duration > 0 && !player2.paused){
                player4.setAttribute("src", this.sound)
                player4.play()
            } else {
                player2.setAttribute("src", this.sound)
                player2.play()
            }
        } else {
            player1.setAttribute("src", this.sound)
            player1.play()
        }
        this.breakAnimation(ctx);
    };

    breakAnimation(ctx){
        let brickCenterX = this.pos[0] + (this.dims[0] / 2);
        let brickCenterY = this.pos[1] + (this.dims[1] / 2);
        ctx.beginPath();
        ctx.arc(
            brickCenterX,
            brickCenterY,
            this.dims[0] * 1.5,
            0,
            2 * Math.PI,
            false
        )
        // ctx.strokeStyle = "rgba(100, 10, 100, 0.4)";
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 6;
        // ctx.fillStyle = "rgba(255, 255, 100, 0.4)";
        ctx.stroke();

    }
}

window.Brick = Brick;

export default Brick;
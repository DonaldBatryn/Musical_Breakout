

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

    collideWith() {
        this.game.remove(this);
        // add function to play sound possibly here?
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
    };
}

window.Brick = Brick;

export default Brick;
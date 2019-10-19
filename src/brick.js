

class Brick {
    constructor(options, game){
        this.color = options["color"];
        this.sound = options["sound"];
        this.word = options["word"];
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
        this.createFlyer(this);
        this.game.brickRotation += 1
    };
    
    createFlyer(brick){
        let flyerBackground = document.getElementById("flyer-background");
        let newFlyer = document.createElement('div');
        newFlyer.innerHTML = brick.word;
        newFlyer.classList.add(`flyer-${this.game.brickRotation % 3}`);
        flyerBackground.appendChild(newFlyer);
        setTimeout(() => {
            newFlyer.parentNode.removeChild(newFlyer)
        }, 2000)
    }

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
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 6;
        ctx.stroke();
    }
}

window.Brick = Brick;

export default Brick;
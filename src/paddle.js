

class Paddle {
    constructor(game, ball){
        this.game = game;
        this.color = "black";
        this.pos = [413, 606];
        this.dims = [75, 15];
        this.vel = [0, 0];
        this.ball = ball
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

    move(dir, ctx){
        if (!this.game.inMotion){
            let paddleX = this.pos[0] + dir;
            let paddleY = this.pos[1]
            let ballX = this.ball.pos[0] + dir
            let ballY = this.ball.pos[1]
            if (paddleX < 25){
                paddleX = 25;
                ballX = 63;
            }
            if (paddleX > 805){
                paddleX = 805;
                ballX = 842;
            }
            this.pos = [paddleX, paddleY]
            this.ball.pos = [ballX, ballY]
            this.ball.draw(ctx)
            this.draw(ctx);
        } else {
            let paddleX = this.pos[0] + dir;
            let paddleY = this.pos[1]
            if (paddleX < 25) {
                paddleX = 25;
            }
            if (paddleX > 805) {
                paddleX = 805;

            }
            this.pos = [paddleX, paddleY]
            console.log(this.pos)
            this.draw(ctx);
        }
    }   
}

export default Paddle;
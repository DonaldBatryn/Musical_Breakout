

class GameView {
    constructor(game, ctx){
        this.game = game;
        this.ctx = ctx;
        this.interval = "";
        this.rightKey = false;
        this.leftKey = false;
    }

    start() {
        let that = this;
        that.bindKeyHandlers();
        this.interval = setInterval(function () {
            that.game.draw(that.ctx);
            that.game.step(that.ctx);
            // console.log(that.game.paddle.vel)
            if (that.game.win){
                this.win();
            } else if (that.game.roundOver){
                that.stop();
            }
        }, 20);
    }

    stop(){
        clearInterval(this.interval);
        this.game.NUM_LIVES -= 1;
        this.game.resetBallPaddle(this.ctx);
        if (this.game.NUM_LIVES > 0){
            this.game.roundOver = false;
            this.start();
        } else {
            this.gameOver();
            // render game over and play again button, score?
        }
    }

    gameOver(){
        this.game.draw(this.ctx)
        this.ctx.clearRect(15, 400, 870, 240)
        // let gameoverMsg = document.getElementById("gameover-msg");
        // gameoverMsg.classList.remove("hidden")
        this.ctx.font = "90px Apercu";
        this.ctx.fillStyle = "red"
        this.ctx.fillText("GAME OVER", 180, 410)
    }

    win(){
        clearInterval(this.interval);
        // display win stuff
    }

    keyDownHandler(e){
        if (e.key === "ArrowRight" || e.key === "d") {
            this.rightKey = true;
        } else if (e.key === "ArrowLeft" || e.key === "a") {
            this.leftKey = true
        }
        if (this.leftKey){
            this.game.paddleVel = [-10, 0]
            // this.game.paddle.move([-5, 0], this.ctx)
        }
        if (this.rightKey) {
            this.game.paddleVel = [10, 0]
            // this.game.paddle.move([5, 0], this.ctx)
        }
    }
    
    keyUpHandler(e){
        if (e.key === "ArrowRight" || e.key === "d") {
            this.rightKey = false;
        } else if (e.key === "ArrowLeft" || e.key === "a") {
            this.leftKey = false
        }
        if (!this.leftKey){
            this.game.paddleVel = [0, 0]
        }
        if (!this.rightKey) {
            this.game.paddleVel = [0, 0]
        }
    }

    bindKeyHandlers(){
        let gameV = this;
        key("space", function () { gameV.game.ball.launch() });
        // if (this.game.NUM_LIVES > 0){
        //     key("left", function () { gameV.game.paddle.move(-10, gameV.ctx) });
        //     key("a", function () { gameV.game.paddle.move(-10, gameV.ctx) });
        //     key("right", function () { gameV.game.paddle.move(10, gameV.ctx) });
        //     key("d", function () { gameV.game.paddle.move(10, gameV.ctx) });
        // }
        document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
        document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
    }
}

export default GameView;
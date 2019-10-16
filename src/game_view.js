

class GameView {
    constructor(game, ctx){
        this.game = game;
        this.ctx = ctx;
        this.interval = "";
        this.rightKey = false;
        this.leftKey = false;
        this.mKey = false;
        this.nKey = false;
    }

    start() {
        let that = this;
        that.bindKeyHandlers();
        this.interval = setInterval(function () {
            that.game.draw(that.ctx);
            that.game.step(that.ctx);
            if (that.game.win){
                that.win();
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
        this.ctx.font = "90px Apercu";
        this.ctx.fillStyle = "red"
        this.ctx.fillText("GAME OVER", 180, 410)
    }

    win(){
        clearInterval(this.interval);
        this.game.draw(this.ctx)
        this.ctx.clearRect(15, 400, 870, 240)
        this.ctx.font = "90px Apercu";
        this.ctx.fillStyle = "green"
        this.ctx.fillText("YOU WIN!", 180, 410)
    }

    keyDownHandler(e){
        if (e.key === "ArrowRight" || e.key === "d") {
            this.rightKey = true;
        } else if (e.key === "ArrowLeft" || e.key === "a") {
            this.leftKey = true
        } else if (e.key === "m") {
            this.mKey = true;
        } else if (e.key === "n") {
            this.nKey = true;
        }
        if (this.leftKey){
            this.game.paddleVel = [-10, 0]
            // this.game.paddle.move([-5, 0], this.ctx)
        }
        if (this.rightKey) {
            this.game.paddleVel = [10, 0]
            // this.game.paddle.move([5, 0], this.ctx)
        }
        if (this.mKey) {
            // turn pointer right
        }
        if (this.nKey) {
            // turn pointer left
        }
    }
    
    keyUpHandler(e){
        if (e.key === "ArrowRight" || e.key === "d") {
            this.rightKey = false;
        } else if (e.key === "ArrowLeft" || e.key === "a") {
            this.leftKey = false
        } else if (e.key === "m") {
            this.mKey = false;
        } else if (e.key === "n") {
            this.nKey = false;
        }
        if (!this.leftKey){
            this.game.paddleVel = [0, 0]
        }
        if (!this.rightKey) {
            this.game.paddleVel = [0, 0]
        }
        if (!this.mKey) {
            // do nothing?
        }
        if (!this.nKey) {
            // do nothing?
        }
    }

    bindKeyHandlers(){
        let gameV = this;
        key("space", function () { gameV.game.ball.launch() });
        document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
        document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
    }
}

export default GameView;
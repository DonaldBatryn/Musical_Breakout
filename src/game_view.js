

class GameView {
    constructor(game, ctx){
        this.game = game;
        this.ctx = ctx;
        this.interval = "";
    }

    start() {
        let that = this;
        let currentLives = that.game.NUM_LIVES
        that.bindKeyHandlers();
        this.interval = setInterval(function () {
            that.game.draw(that.ctx);
            that.game.step(that.ctx);
            if (that.game.roundOver){
                that.stop();
            }
        }, 20);
    }

    stop(){
        clearInterval(this.interval);
        this.game.NUM_LIVES -= 1;
        // console.log(this.game.NUM_LIVES)
        this.game.resetBallPaddle(this.ctx)
        if (this.game.NUM_LIVES > 0){
            this.game.roundOver = false;
            this.start();
        } else {
            this.gameOver()
            console.log("Game Over")
            // render game over and play again button, score?
        }
    }

    gameOver(){
        this.game.draw(this.ctx)
        this.ctx.clearRect(15, 400, 870, 240)
    }

    bindKeyHandlers(){
        let gameV = this;
        key("space", function () { gameV.game.ball.launch() });

        key("left", function () { gameV.game.paddle.move(-30, gameV.ctx) });
        key("a", function () { gameV.game.paddle.move(-30, gameV.ctx) });
        key("right", function () { gameV.game.paddle.move(30, gameV.ctx) });
        key("d", function () { gameV.game.paddle.move(30, gameV.ctx) });
    }
}

export default GameView;
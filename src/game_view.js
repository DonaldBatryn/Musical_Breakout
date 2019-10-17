

class GameView {
    constructor(game, ctx, canvas){ // took out pointerCtx
        this.game = game;
        this.canvas = canvas;
        this.ctx = ctx;
        this.interval = "";
        this.rightKey = false;
        this.leftKey = false;
        this.menuOpen = true;
    
    }

    start() {
        let that = this;
        that.bindKeyHandlers();
 
        let startButton = document.getElementById("start-button")
        startButton.addEventListener("click", (e) => {
            e.stopPropagation();
            let menu = document.getElementById("game-menu")
            menu.classList.add("hidden")
            that.menuOpen = false;
            blocker.classList.add("hidden")
        })
        this.interval = setInterval(function () {
            that.game.draw(that.ctx); // took out pointerCtx
            that.game.step(that.ctx); // took out pointerCtx
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
        }
    }

    gameOver(){
        let that = this;
        this.game.draw(this.ctx) // took out pointerCtx
        that.ctx.clearRect(15, 400, 870, 240)
        // that.pointerCtx.clearRect(15, 400, 870, 240)
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
        this.ctx.fillText("YOU WIN!", 240, 410)
    }

    keyDownHandler(e){
        if (e.key === "ArrowRight" || e.key === "d") {
            this.rightKey = true;
        } else if (e.key === "ArrowLeft" || e.key === "a") {
            this.leftKey = true
        } 
        if (this.leftKey){
            this.game.paddleVel = [-10, 0]
        }
        if (this.rightKey) {
            this.game.paddleVel = [10, 0]
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
        let launchX = this.game.ball.pos[0] 
        key("space", function () {
            if (!gameV.menuOpen){
                gameV.game.ball.launch([launchX, -5])
            }
        });
        document.addEventListener("keydown", (e) => this.keyDownHandler(e), false);
        document.addEventListener("keyup", (e) => this.keyUpHandler(e), false);
        document.addEventListener("click", (e) => {
            if (!gameV.game.inMotion && !gameV.menuOpen){
                let X = e.pageX;
                let Y = e.pageY;
                X -= gameV.canvas.offsetLeft;
                Y -= gameV.canvas.offsetTop;
                gameV.game.ball.launch([X, Y])
            }
        })
    }
}

export default GameView;
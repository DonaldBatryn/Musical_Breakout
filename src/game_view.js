import { WIN_AUDIO, LOSE_AUDIO } from './audio';

const muteImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/mute.png"
const soundImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/volume.png"

class GameView {
    constructor(game, ctx, canvas){ // took out pointerCtx
        this.game = game;
        this.canvas = canvas;
        this.ctx = ctx;
        this.interval = "";
        this.rightKey = false;
        this.leftKey = false;
        this.menuOpen = true;
        this.volumeListener = (e) => {
            let volButton = document.getElementById("toggle-sound");
            let player1 = document.getElementById("audio-1")
            let player2 = document.getElementById("audio-2")
            let player3 = document.getElementById("audio-3")
            let player4 = document.getElementById("audio-4")
            let player5 = document.getElementById("win-lose-audio")

            const ALL_AUDIO_PLAYERS = [player1, player2, player3, player4, player5]
            e.stopPropagation();
            ALL_AUDIO_PLAYERS.forEach(player => {

                if (player.volume === 1) {
                    console.log("turning volume down")

                    player.volume = 0;
                    volButton.src = muteImage;
                } else {
                    console.log("turning volume up")

                    player.volume = 1;
                    volButton.src = soundImage;
                }
            })
        }
    }

    unMount(gameV){
        let volButton = document.getElementById("toggle-sound");
        volButton.removeEventListener("click", gameV.volumeListener);
    }

    start() {
        let that = this;
        that.bindKeyHandlers();
        let playAgainButton = document.getElementById("play-again");
        playAgainButton.classList.add("hidden");
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
        document.getElementById("lives").innerHTML = `LIVES: ${this.game.NUM_LIVES}`
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
        this.game.draw(this.ctx)
        that.ctx.clearRect(15, 400, 870, 240)

        setTimeout(() => {
            let endPlayer = document.getElementById("win-lose-audio");
            endPlayer.setAttribute("src", LOSE_AUDIO);
            endPlayer.play();
            let playAgainButton = document.getElementById("play-again");
            playAgainButton.classList.remove("hidden");
            this.ctx.font = "90px Apercu";
            this.ctx.fillStyle = "rgba(241, 3, 3, 0.5)";
            this.ctx.fillText("GAME OVER", 180, 410)
        }, 750)
    }

    

    win(){
        clearInterval(this.interval);
        this.game.draw(this.ctx)
        this.ctx.clearRect(15, 400, 870, 240)
        setTimeout(() => {
            this.ctx.font = "90px Apercu";
            this.ctx.fillStyle = "rgba(230, 169, 40, 0.637)"
            this.ctx.fillText("YOU WIN!", 240, 410)

        }, 1700)
        setTimeout(() => {
            let endPlayer = document.getElementById("win-lose-audio");
            endPlayer.setAttribute("src", WIN_AUDIO);
            endPlayer.play();
            let playAgainButton = document.getElementById("play-again");
            playAgainButton.classList.remove("hidden");
        }, 750)
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
        let player1 = document.getElementById("audio-1")
        let player2 = document.getElementById("audio-2")
        let player3 = document.getElementById("audio-3")
        let player4 = document.getElementById("audio-4")
        let player5 = document.getElementById("win-lose-audio")
        
        const ALL_AUDIO_PLAYERS = [player1, player2, player3, player4, player5]

        let volButton = document.getElementById("toggle-sound");
        // this.volumeListener = volButton.addEventListener("click", (e) => {
        //     e.stopPropagation();
        //     ALL_AUDIO_PLAYERS.forEach(player => {
               
        //         if (player.volume === 1){
        //             console.log("turning volume down")
                    
        //             player.volume = 0;
        //             volButton.src = muteImage;
        //         } else {
        //             console.log("turning volume up")
                    
        //             player.volume = 1;
        //             volButton.src = soundImage;
        //         }
        //     })
        // })
        volButton.addEventListener("click", this.volumeListener);
    }
}

export default GameView;
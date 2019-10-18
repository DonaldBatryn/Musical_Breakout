import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    
    let previousGame;
    let gameV = new GameView(new Game(), ctx, canvas);
    gameV.start();
    previousGame = gameV;
    let playAgain = document.getElementsByClassName("play-again-button")[0];
    playAgain.addEventListener("click", (e) => {
        e.stopPropagation();
        gameV.unMount(previousGame);
        let nextGame = new GameView(new Game(), ctx, canvas);
        previousGame = nextGame
        nextGame.menuOpen = false;
        document.getElementById("score").innerHTML = "SCORE: 0";
        document.getElementById("lives").innerHTML = "LIVES: 3";
        nextGame.start();
    })
    
})
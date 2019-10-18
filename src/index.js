import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    

    let gameV = new GameView(new Game(), ctx, canvas);
    gameV.start();

    let playAgain = document.getElementsByClassName("play-again-button")[0];
    playAgain.addEventListener("click", (e) => {
        e.stopPropagation();
        let nextGame = new GameView(new Game(), ctx, canvas)
        nextGame.menuOpen = false;
        nextGame.start();
    })
    
})
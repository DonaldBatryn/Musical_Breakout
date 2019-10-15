

class GameView {
    constructor(game, ctx){
        this.game = game;
        this.ctx = ctx
    }

    start() {
        let that = this;
        that.bindKeyHandlers();
        setInterval(function () {
            that.game.draw(that.ctx);
            that.game.step(that.ctx);
        }, 20);
    }

  

    bindKeyHandlers(){
        let gameV = this;
        key("space", function () { gameV.game.ball.launch() });

        key("left", function () { gameV.game.paddle.move(-30, gameV.ctx) });
        key("right", function () { gameV.game.paddle.move(30, gameV.ctx) });
        // key("a", function () { gameV.game.ship.power([0, 0.5]) });

        // key("right", function () { gameV.game.ship.power([0, -0.5]) });
        // key("d", function () { gameV.game.ship.power([0, 0.5]) });
    
    }
}

export default GameView;
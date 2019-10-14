import MovingObject from './moving_object';

class Ball extends MovingObject {
    constructor(pos, game){
        this.COLOR = "pink";
        this.RADIUS = 15;
        this.game = game;
        MovingObject.call(this, {
            "pos": pos,
            "vel": [5, 5],
            "radius": this.RADIUS,
            "color": this.COLOR,
            "game": game
        })
    }
}

export default Ball;
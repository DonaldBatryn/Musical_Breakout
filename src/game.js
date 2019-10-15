import Brick from './brick';
import { randomColor } from './utils';

// set up some constants that pair a color to a sound
const COLORS = [
    "green",
    "pink",
    "blue",
    "purple",
    "red",
    "orange",
    "yellow",
    "gold",
    "lightgray",
    "violet",
    "lightblue"
]

class Game {
    constructor(){
        this.DIM_X = 900;
        this.DIM_Y = 650;
        this.NUM_BRICKS = 70;
        this.bricks = [];
    }

    addBricks(){
        
       
        let brickX = 100;
        let brickY = 100;
        while (this.bricks.length < this.NUM_BRICKS) {
            let colorIndex = this.bricks.length % 11
            if (brickX === 800){
                brickX = 100
                brickY += 30
            }
            this.bricks.push(new Brick({
                "color": COLORS[colorIndex],
                "pos": [brickX, brickY],
                "sound": "sound"
            }, this))
            brickX += 70;
        }
    }

    draw(ctx){
        this.bricks.forEach(brick => {
            brick.draw(ctx)
        })
    }
    
}

window.randomColor = randomColor;
window.Game = Game;

export default Game;
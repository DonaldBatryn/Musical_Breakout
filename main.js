/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/*! exports provided: BRICK_AUDIO, WIN_AUDIO, LOSE_AUDIO, BRICK_WORDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRICK_AUDIO", function() { return BRICK_AUDIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIN_AUDIO", function() { return WIN_AUDIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOSE_AUDIO", function() { return LOSE_AUDIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRICK_WORDS", function() { return BRICK_WORDS; });

const BRICK_AUDIO = [
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/AltLowSixth.mp3",
    // "https://musical-breakout-js.s3.us-east-2.amazonaws.com/AltRoot.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Root.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/AltSecond.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Fifth.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/LowSixth.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/LowSixth.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/OhYeahEightSix.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/OhYeahEightSix.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Ohh3432.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Ohh53.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Ohh612.mp3",
    // "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Ohh6123.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Root.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Root8va.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/RootThird.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Second.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/SixEightHarmony.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Sixth.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/TenthHarmony.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/Third.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/ThirdEigth.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/ThirdFifth.mp3",
    "https://musical-breakout-js.s3.us-east-2.amazonaws.com/ThirdSixth.mp3"
];

const WIN_AUDIO = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/YouWin3.mp3"

const LOSE_AUDIO = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/GameOver2.mp3"

const BRICK_WORDS = [
    "Ohh",
    "Ohh",
    "Ohh",
    "Ohh",
    "Ohh",
    "Ohh",
    "Oh Yeaahh!",
    "Oh Yeaahh!",
    "oOo-Ohhh",
    "Oh-ohhh",
    "Whoaa",
    "Ohh",
    "Ahh!",
    "Ohh",
    "Ohh",
    "Ohh (ohh)",
    "Ohh",
    "Ohh (ohh)",
    "Ohh",
    "Ohh (ohh)",
    "Ohh (ohh)",
    "Ohh (ohh)"
]

/***/ }),

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Ball {
    constructor(game){
        this.pos = [450, 590];
        this.vel = [0, 0];
        this.radius = 12;
        this.color = "black";
        this.game = game;
        this.isCollidedWith = this.isCollidedWith.bind(this)
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI,
            false
        )
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }

    move(ctx) {
        let x = this.pos[0] + this.vel[0];
        let y = this.pos[1] + this.vel[1];
        this.pos = [x, y]
        this.draw(ctx);
    }

    isCollidedWith(brick) {
        let brickX1 = brick.pos[0]
        let brickX2 = brick.pos[0] + brick.dims[0]
        let brickY1 = brick.pos[1]
        let brickY2 = brick.pos[1] + brick.dims[1]

        if (this.pos[0] + this.radius > brickX1 &&
            this.pos[0] - this.radius < brickX2 &&
            this.pos[1] + this.radius > brickY1 &&
            this.pos[1] - this.radius < brickY2) {
            return true;
        }
        return false;
    }

    // takes X/Y of mouse click and gives the ball
    // its velocity based on the clicks position 
    // relative to the ball
    launch(clickPos){
        let player3 = document.getElementById("audio-3");
        player3.play();
        if (this.game.inMotion){
            return
        } else {
            let ballXPos = this.pos[0]
            let velX;
            let velY;
            if (clickPos[0] >= ballXPos - 837 && clickPos[0] <= ballXPos - 775){
                velX = -10;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 775 && clickPos[0] <= ballXPos - 700){
                velX = -9;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 700 && clickPos[0] <= ballXPos - 675){
                velX = -8;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 675 && clickPos[0] <= ballXPos - 600){
                velX = -7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 600 && clickPos[0] <= ballXPos - 525){
                velX = -7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 525 && clickPos[0] <= ballXPos - 450) {
                velX = -6;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 450 && clickPos[0] <= ballXPos - 375){
                velX = -6;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 375 && clickPos[0] <= ballXPos - 300) {
                velX = -5;
                velY = -3;
            }
            if (clickPos[0] > ballXPos - 300 && clickPos[0] <= ballXPos - 225){
                velX = -4;
                velY = -4;
            }
            if (clickPos[0] > ballXPos - 225 && clickPos[0] <= ballXPos - 150){
                velX = -3;
                velY = -4;
            }
            if (clickPos[0] > ballXPos - 150 && clickPos[0] <= ballXPos - 75) {
                velX = -2;
                velY = -4;
            }
            if (clickPos[0] > ballXPos - 75 && clickPos[0] < ballXPos - 10) {
                velX = -1;
                velY = -5;
            }
            if (clickPos[0] < ballXPos + 10 && clickPos[0] > ballXPos - 10) {
                velX = 0;
                velY = -5;
            }
            if (clickPos[0] > ballXPos + 10 && clickPos[0] < ballXPos + 75) {
                velX = 1;
                velY = -5;
            }
            if (clickPos[0] > ballXPos + 75 && clickPos[0] < ballXPos + 150) {
                velX = 2;
                velY = -4;
            }
            if (clickPos[0] > ballXPos + 150 && clickPos[0] < ballXPos + 225) {
                velX = 3;
                velY = -4;
            }
            if (clickPos[0] > ballXPos + 225 && clickPos[0] < ballXPos + 300) {
                velX = 4;
                velY = -4;
            }
            if (clickPos[0] > ballXPos + 300 && clickPos[0] < ballXPos + 375) {
                velX = 5;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 375 && clickPos[0] < ballXPos + 450) {
                velX = 6;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 450 && clickPos[0] <= ballXPos + 525) {
                velX = 6;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 525 && clickPos[0] <= ballXPos + 600) {
                velX = 7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 600 && clickPos[0] <= ballXPos + 675) {
                velX = 7;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 675 && clickPos[0] <= ballXPos + 750) {
                velX = 8;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 750 && clickPos[0] <= ballXPos + 825) {
                velX = 9;
                velY = -3;
            }
            if (clickPos[0] > ballXPos + 825 && clickPos[0] <= ballXPos + 837) {
                velX = 10;
                velY = -3;
            }
            this.game.inMotion = true;
            this.game.aiming = false;
            this.vel = [velX, velY];
        }
    }

    hitWall(){
        if (this.pos[0] + this.radius >= 890){
            return true;
        }
        if (this.pos[0] - this.radius <= 10){
            return true;
        }
        if (this.pos[1] + this.radius >= 640){
            return true;
        }
        if (this.pos[1] - this.radius <= 10){
            return true;
        }
        return false;
    }

    hitPaddle(paddle){
        let paddleY = paddle.pos[1];
        let paddleStartX = paddle.pos[0];
        let paddleEndX = paddle.pos[0] + paddle.dims[0];
        let bottomBall = this.pos[1] + this.radius
        let rightBall = this.pos[0] + this.radius
        let leftBall = this.pos[0] - this.radius
        if ((bottomBall > paddleY - 4 && bottomBall < paddleY + 4) && (rightBall > paddleStartX && leftBall < paddleEndX)) {
            return true
        }
        return false;
    }

    bounce(){
        let currentXvel = this.vel[0];
        let currentYvel = this.vel[1];
        let currentXpos = this.pos[0];
        let currentYpos = this.pos[1];

        if (currentYpos > 637 && currentYpos < 653) {
            this.game.roundOver = true;
            this.vel = [0, 0]
        }
        if (currentXvel > 0 && currentYvel > 0 && currentXpos > 885 && currentYpos < 640){
            // moving towards lower-right, bouncing on right wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel > 0 && currentYvel < 0 && currentXpos > 885 && currentYpos < 640){
            // moving towards upper right, bouncing on right wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel < 0 && currentYvel < 0 && currentXpos < 15 && currentYpos < 640) {
            // moving towards upper-left, bouncing on left wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel < 0 && currentYvel > 0 && currentXpos < 15 && currentYpos < 640) {
            // moving towards lower-left, bouncing on left wall
            this.vel = [-currentXvel, currentYvel]
        }
        if (currentXvel > 0 && currentYvel < 0 && currentXpos < 890 && currentYpos < 15){
            // moving towards upper right, bouncing on upper wall
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel < 0 && currentYvel < 0 && currentXpos < 890 && currentYpos < 15) {
            // moving towards upper left, bouncing on upper wall
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel === 0 && currentYvel < 0){
            // moving straight up
            this.vel = [currentXvel, -currentYvel]
        }
       
    }

    paddleBounce(paddle){
        let currentXvel = this.vel[0];
        let currentYvel = this.vel[1];
        let ballBottomX = this.pos[0];
        let thirdSegment = paddle.dims[0] / 3

        // left paddle segment makes the balls X velocity decrease when hit dead on or from the right
        // or neutralized when hit from the left
        if (currentXvel === 0 && currentYvel > 0 && (ballBottomX < paddle.pos[0] + thirdSegment)) {
            // hit paddle moving straight down
            this.vel = [-2, -currentYvel];
        }
        if (currentXvel > 0 && currentYvel > 0 && (ballBottomX < paddle.pos[0] + thirdSegment)) {
            // hit paddle moving down-right
            this.vel = [currentXvel - 2, -currentYvel];
        }
        if (currentXvel < 0 && currentYvel > 0 && (ballBottomX < paddle.pos[0] + thirdSegment)) {
            // hit paddle moving down-left
            this.vel = [currentXvel - 3, -currentYvel];
        }

        //  center paddle segment bounces the ball at the same rate it was hit at
        if (currentXvel === 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + thirdSegment && ballBottomX < (paddle.pos[0] + paddle.dims[0]) - thirdSegment)) {
            // hit paddle moving straight down
            this.vel = [currentXvel - 1, -currentYvel]
        }
        if (currentXvel > 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + thirdSegment && ballBottomX < (paddle.pos[0] + paddle.dims[0]) - thirdSegment)) {
            // hit paddle moving down-right
            this.vel = [currentXvel, -currentYvel]
        }
        if (currentXvel < 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + thirdSegment && ballBottomX < (paddle.pos[0] + paddle.dims[0]) - thirdSegment)) {
            // hit paddle moving down-left
            this.vel = [currentXvel, -currentYvel]
        }

        // right paddle segment makes the balls X velocity increase when hit dead on or from the left
        // or neutralized when hit from the right
        if (currentXvel === 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + (thirdSegment * 2) && ballBottomX < (paddle.pos[0] + paddle.dims[0]))) {
            // hit paddle moving straight down
            this.vel = [2, -currentYvel]
        }
        if (currentXvel > 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + (thirdSegment * 2) && ballBottomX < (paddle.pos[0] + paddle.dims[0]))) {
            // hit paddle moving down-right
            this.vel = [currentXvel + 2, -currentYvel]
        }
        if (currentXvel < 0 && currentYvel > 0 && (ballBottomX > paddle.pos[0] + (thirdSegment * 2) && ballBottomX < (paddle.pos[0] + paddle.dims[0]))) {
            // hit paddle moving down-left
            this.vel = [currentXvel + 3, -currentYvel]
        }
        
    }
}

window.Ball = Ball;

/* harmony default export */ __webpack_exports__["default"] = (Ball);

/***/ }),

/***/ "./src/brick.js":
/*!**********************!*\
  !*** ./src/brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class Brick {
    constructor(options, game){
        this.color = options["color"];
        this.sound = options["sound"];
        this.word = options["word"];
        this.pos = options["pos"];
        this.dims = [65, 25]
        this.game = game;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.rect(this.pos[0], this.pos[1], this.dims[0], this.dims[1]);
        ctx.stroke();
        ctx.fill();
    }

    collideWith(ctx) {
        this.game.remove(this);
        let player1 = document.getElementById("audio-1");
        let player2 = document.getElementById("audio-2");
        let player4 = document.getElementById("audio-4");
        let player5 = document.getElementById("audio-5");
        if (player1.duration > 0 && !player1.paused){
            if (player2.duration > 0 && !player2.paused){
                if (player5.duration > 0 && !player5.paused){
                    player4.setAttribute("src", this.sound);
                    player4.play();
                } else {
                    player5.setAttribute("src", this.sound);
                    player5.play();
                }
            } else {
                player2.setAttribute("src", this.sound);
                player2.play();
            }
        } else {
            player1.setAttribute("src", this.sound);
            player1.play();
        }
        this.breakAnimation(ctx);
        this.createFlyer(this);
        this.game.brickRotation += 1
    };
    
    createFlyer(brick){
        let flyerBackground = document.getElementById("flyer-background");
        let newFlyer = document.createElement('div');
        newFlyer.innerHTML = brick.word;
        newFlyer.classList.add(`flyer-${this.game.brickRotation % 3}`);
        flyerBackground.appendChild(newFlyer);
        setTimeout(() => {
            newFlyer.parentNode.removeChild(newFlyer)
        }, 2000)
    }

    breakAnimation(ctx){
        let brickCenterX = this.pos[0] + (this.dims[0] / 2);
        let brickCenterY = this.pos[1] + (this.dims[1] / 2);
        ctx.beginPath();
        ctx.arc(
            brickCenterX,
            brickCenterY,
            this.dims[0] * 1.5,
            0,
            2 * Math.PI,
            false
        )
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 6;
        ctx.stroke();
    }
}

window.Brick = Brick;

/* harmony default export */ __webpack_exports__["default"] = (Brick);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ "./src/brick.js");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ "./src/ball.js");
/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paddle */ "./src/paddle.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ "./src/audio.js");





const COLORS = [
    "rgba(255, 166, 0, 0.616)", //clear orange
    "rgba(230, 169, 40, 0.637)", //clear beige
    "rgba(231, 201, 31, 0.616)", // clear gold
    "rgba(128, 0, 128, 0.651)", //clear purple
    "rgba(128, 0, 128, 0.651)", // clear purple
    "violet",
    "rgba(204, 40, 245, 0.616)", //clear pink
    "pink",
    "rgba(63, 125, 241, 0.603)", //clear blue
    "lightblue",
    "rgba(152, 209, 228, 0.616)", // clear lightblue
]

class Game {
    constructor(){
        this.DIM_X = 900;
        this.DIM_Y = 650;
        this.NUM_BRICKS = 70;
        this.NUM_LIVES = 3;
        this.roundOver = false;
        this.score = 0;
        this.bricks = [];
        this.brickRotation = 1;
        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.addBricks();
        this.inMotion = false;
        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.ball); 
        this.paddleVel = [0, 0];
        this.win = false;
    }

    addBricks(){
        let brickX = 100;
        let brickY = 100;
        while (this.bricks.length < this.NUM_BRICKS) {
            let randNum = Math.floor(Math.random() * _audio__WEBPACK_IMPORTED_MODULE_3__["BRICK_AUDIO"].length)
            let colorIndex = this.bricks.length % 11
            if (brickX === 800){
                brickX = 100
                brickY += 30
            }
            this.bricks.push(new _brick__WEBPACK_IMPORTED_MODULE_0__["default"]({
                "color": COLORS[colorIndex],
                "pos": [brickX, brickY],
                "sound": _audio__WEBPACK_IMPORTED_MODULE_3__["BRICK_AUDIO"][randNum],
                "word": _audio__WEBPACK_IMPORTED_MODULE_3__["BRICK_WORDS"][randNum]
            }, this))
            brickX += 70;
        }
    }

    drawBackground(ctx){
        // black background
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.rect(0, 0, 900, 650);
        ctx.stroke();
        ctx.fill();
        // white background
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "white";
        ctx.fillStyle = "white";
        ctx.rect(10, 10, 880, 630);
        ctx.stroke();
        ctx.fill();
    }

    draw(ctx){
        ctx.clearRect(0, 0, 900, 650);
        this.drawBackground(ctx);
        this.bricks.forEach(brick => {
            brick.draw(ctx)
        })
        this.ball.draw(ctx);
        this.paddle.draw(ctx);
    }

    checkCollisions(ctx) {
        for (let i = 0; i < this.bricks.length; i++) {
            let currentBrick = this.bricks[i]
            if (this.ball.isCollidedWith(currentBrick)) {
                currentBrick.collideWith(ctx);
            } 
            if (this.ball.hitWall()) {
                this.ball.bounce()
            }
            if (this.ball.hitPaddle(this.paddle)){
                this.ball.paddleBounce(this.paddle)
            }
        }
    }

    step(ctx){
        this.ball.move(ctx)
        this.paddle.move(this.paddleVel, ctx)
        this.checkCollisions(ctx)
    }

    remove(brick){
        
        let idx = this.bricks.indexOf(brick);
        this.bricks.splice(idx, 1);
        this.score += 100;
        document.getElementById("score").innerHTML = `SCORE: ${this.score}`;
        if (this.bricks.length === 0){
            this.win = true
        }
        let currentX = this.ball.vel[0]
        let currentY = this.ball.vel[1]

        if (this.ball.pos[1] > (brick.pos[1] + brick.dims[1])){
            this.ball.vel = [currentX, -currentY]
            return
        }
        if (this.ball.pos[1] < brick.pos[1]) {
            this.ball.vel = [currentX, -currentY]
            return
        }
        if (this.ball.pos[0] < brick.pos[0]) {
            this.ball.vel = [-currentX, currentY]
            return
        }
        if (this.ball.pos[0] > (brick.pos[0] + brick.dims[0])) {
            this.ball.vel = [-currentX, currentY]
            return
        }
    }

    resetBallPaddle(ctx){
        this.inMotion = false;
        this.ball = [];
        this.paddle = [];
        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.ball, this.pointer);
        this.ball.draw(ctx);
        this.paddle.draw(ctx);
    }
}


/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ "./src/audio.js");


const muteImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/mute.png"
const soundImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/volume.png"

class GameView {
    constructor(game, ctx, canvas){ 
        this.game = game;
        this.canvas = canvas;
        this.ctx = ctx;
        this.interval = "";
        this.rightKey = false;
        this.leftKey = false;
        this.menuOpen = true;
        this.volumeListener = (e) => {
            e.stopPropagation();
            let volButton = document.getElementById("toggle-sound");
            let player1 = document.getElementById("audio-1")
            let player2 = document.getElementById("audio-2")
            let player3 = document.getElementById("audio-3")
            let player4 = document.getElementById("audio-4")
            let player5 = document.getElementById("audio-5")
            let player6 = document.getElementById("win-lose-audio")

            const ALL_AUDIO_PLAYERS = [ player1, player2, player3, player4, player5, player6 ]
            ALL_AUDIO_PLAYERS.forEach(player => {

                if (player.volume === 1) {
                    player.volume = 0;
                    volButton.src = muteImage;
                } else {
                    player.volume = 1;
                    volButton.src = soundImage;
                }
            })
        }
    }

    unMount(gameV){
        let gameOverMsg = document.getElementById("game-over-msg");
        gameOverMsg.classList.add("hidden")
        let youWinMsg = document.getElementById("you-win-msg")
        youWinMsg.classList.add("hidden")
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
            endPlayer.setAttribute("src", _audio__WEBPACK_IMPORTED_MODULE_0__["LOSE_AUDIO"]);
            endPlayer.play();
            let playAgainButton = document.getElementById("play-again");
            playAgainButton.classList.remove("hidden");
            let gameOverMsg = document.getElementById("game-over-msg");
            gameOverMsg.classList.remove("hidden");
        }, 750)
    }

    win(){
        clearInterval(this.interval);
        this.game.draw(this.ctx)
        this.ctx.clearRect(15, 400, 870, 240)
        setTimeout(() => {
            let youWinMsg = document.getElementById("you-win-msg")
            youWinMsg.classList.remove("hidden")
        }, 1700)
        setTimeout(() => {
            let endPlayer = document.getElementById("win-lose-audio");
            endPlayer.setAttribute("src", _audio__WEBPACK_IMPORTED_MODULE_0__["WIN_AUDIO"]);
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

        let volButton = document.getElementById("toggle-sound");
        volButton.addEventListener("click", this.volumeListener);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");



document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    
    let previousGame;
    let gameV = new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](new _game__WEBPACK_IMPORTED_MODULE_0__["default"](), ctx, canvas);
    gameV.start();
    previousGame = gameV;
    let playAgain = document.getElementsByClassName("play-again-button")[0];
    playAgain.addEventListener("click", (e) => {
        e.stopPropagation();
        gameV.unMount(previousGame);
        let nextGame = new _game_view__WEBPACK_IMPORTED_MODULE_1__["default"](new _game__WEBPACK_IMPORTED_MODULE_0__["default"](), ctx, canvas);
        previousGame = nextGame
        nextGame.menuOpen = false;
        document.getElementById("score").innerHTML = "SCORE: 0";
        document.getElementById("lives").innerHTML = "LIVES: 3";
        nextGame.start();
    })
    
});

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class Paddle {
    constructor(game, ball){ 
        this.game = game;
        this.color = "black";
        this.pos = [413, 606];
        this.dims = [75, 15];
        this.vel = [0, 0];
        this.ball = ball;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.fillStyle = this.color;
        ctx.rect(this.pos[0], this.pos[1], this.dims[0], this.dims[1]);
        ctx.stroke();
        ctx.fill();
    }

    move(vel, ctx) {
        if (!this.game.inMotion) {
            let paddleX = this.pos[0] + vel[0];
            let paddleY = this.pos[1];
            let ballX = this.ball.pos[0] + vel[0];
            let ballY = this.ball.pos[1];
            if (paddleX < 25) {
                paddleX = 25;
                ballX = 63;
            }
            if (paddleX > 805) {
                paddleX = 805;
                ballX = 842;
            }
            this.pos = [paddleX, paddleY]
            this.ball.pos = [ballX, ballY]
            this.ball.draw(ctx)
            this.draw(ctx);
        } else {
            let paddleX = this.pos[0] + vel[0];
            let paddleY = this.pos[1];
            if (paddleX < 25) {
                paddleX = 25;
            }
            if (paddleX > 805) {
                paddleX = 805;

            }
            this.pos = [paddleX, paddleY]
            this.draw(ctx);
        }
    } 
}

/* harmony default export */ __webpack_exports__["default"] = (Paddle);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
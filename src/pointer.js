
// class Pointer {
//     constructor(game, ball){
//         this.game = game;
//         this.ball = ball;
//         this.pos = [449, 420];
//         this.dims = [2, 150];
//     }

//     draw(pointerCtx){
//         pointerCtx.beginPath();
//         pointerCtx.lineWidth = 1;
//         pointerCtx.strokeStyle = "red";
//         pointerCtx.fillStyle = "red";
//         pointerCtx.rect(this.pos[0], this.pos[1], this.dims[0], this.dims[1]);
//         pointerCtx.stroke();
//         pointerCtx.fill();
//     }

//     rotatePointer(pointerCtx, ballPos){
//         pointerCtx.translate(ballPos[0], ballPos[1]); // sets matrix origin to balls location
//         pointerCtx.rotate(Math.PI / 2)
//     }
// }

// export default Pointer;
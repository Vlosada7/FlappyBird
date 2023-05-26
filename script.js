const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Load game images 
const bird = new Image();
bird.src = "images/bird.png";

const bg = new Image();
bg.src = "images/bg.png";

const floor = new Image();
floor.src = "images/chao.png";

const pipeUp = new Image();
pipeUp.src = "images/canocima.png";

const pipeDown = new Image();
pipeDown.src = "images/canobaixo.png";

//Variables 

const spaceBetween = 100;
let constant; 
let bX = 33; 
let bY = 200;
const gravity = 1.4;
let score = 0; 
let pipes = [];

pipes[0] = {
	x: canvas.width,
	y: 0,
};

//Load game sounds
const flyAudio = new Audio();
flyAudio.src = "sounds/fly.mp3";

const scoreAudio = new Audio();
scoreAudio.src = "sounds/score.mp3";

//Key listenner
document.addEventListener("keydown", fly);

//Fly function
function fly() {
  bY -= 26;
  flyAudio.play();
}

function game() {
	//Background (imagem, posição X, posição Y)
	ctx.drawImage(bg, 0, 0);

  //Creating pipes
  for (let i = 0; i < pipes.length; i++) {
    //Position down pipe
    constant = pipeUp.height + spaceBetween;
    //Position down pipe
    ctx.drawImage(pipeUp, pipes[i].x, pipes[i].y);
    //config down pipe
    ctx.drawImage(pipeDown, pipes[i].x, pipes[i].y + constant);
    //Pipe movement
    pipes[i].x = pipes[i].x - 1; 

    if (pipes[i].x == 125) {
      
    }

  }

	//Floor
	ctx.drawImage(floor, 0, canvas.height - floor.height + 2);

	//Bird
	ctx.drawImage(bird, bX, bY);
	bY += gravity;

	requestAnimationFrame(game);
}

game();
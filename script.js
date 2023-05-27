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
const gravity = 1.8;
let score = 0;
let pipes = [];
let vel = 1;

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

		//Config down pipe
		ctx.drawImage(pipeDown, pipes[i].x, pipes[i].y + constant);

		//Pipe movement
		pipes[i].x = pipes[i].x - vel;

		//Create new pipes
		if (pipes[i].x == 100) {
			pipes.push({
				x: canvas.width,
				y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
			});
		}

		//Colision between pipes
		if (
			(bX + bird.width >= pipes[i].x &&
				bX <= pipes[i].x + pipeUp.width &&
				(bY <= pipes[i].y + pipeUp.height ||
					bY + bird.height >= pipes[i].y + constant)) ||
			bY + bird.height >= canvas.height - floor.height
		) {
			location.reload();
		}

		//Score system
		if (pipes[i].x == 5) {
			score += 1;
			scoreAudio.play();
		}
	}

	//Floor
	ctx.drawImage(floor, 0, canvas.height - floor.height + 2);

	//Bird
	ctx.drawImage(bird, bX, bY);
	bY += gravity;

	//Score board
	ctx.fillStyle = "#000";
	ctx.font = "20px Verdana";
	ctx.fillText("Score: " + score, 10, canvas.height - 20);

	requestAnimationFrame(game);
}

game();

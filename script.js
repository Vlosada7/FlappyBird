const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Carregar imagens do jogo 
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

//Variaveis 

const eec = 100;
let constant; 
let bX = 33; 
let bY = 200;
const gravity = 1.4;
let score = 0; 

//Carregar os sons
const fly = new Audio();
fly.src = "sounds/fly.mp3"

const scoreAudio = new Audio();
scoreAudio.src = "sounds/score.mp3";
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	cam = createCapture(VIDEO);
	cam.parent('game_console');
	cam.size(800,400);

	instializeInSetup(mario);

	model = ml5.poseNet(cam, modelloaded);
	model.on('pose', gotresult);
}
function modelloaded() {
	console.log("model is loaded");
}

function gotresult(results) {
  
    if(results.length > 0) {
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
	  console.log(results);
    }
}

function draw() {
	game();
}







var bird=[];
let dirX=[0];
let dirY=[0];
let dir=[];
let isClearChangeDir=false;
let isClearSpawn=false
let changeDirectionInverval;
let spawnBirdInterval;


let score=0;

let wall=function(y,h){
	rect(width/2,y,width,h);
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	bird.push(new Bird(random(width),height-100));
	changeDirectionInverval = setInterval(changeDirection,1000);
	spawnBirdInterval = setInterval(spawnBird , 5000);
	frameRate(60);
	rectMode(CENTER);
}

function draw() {
	background(255);

	for(var i=0;i<bird.length;i++){
			bird[i].update();
			bird[i].move(dirX[i],dirY[i]);
			if(bird[i].y<0 || bird[i].x>width || bird[i].x<0){
				bird.splice(i,1);
			}
	}
	updateInterval();
	updateIntervalSpawn();

	fill(100);
	wall(height-100,200);
	textSize(18);
	text("Score: "+ score, 20,20);
}


function mouseClicked(){
	for(var i=0;i<bird.length;i++){
		if(dist(bird[i].x,bird[i].y,mouseX,mouseY)<bird[i].size){
			 bird.splice(i,1);
			 score++;
		}
	}
}

function changeDirection(){
	for(var i=0;i<bird.length+1;i++){
			dirX[i]=(random(-5,5)+1);
			dirY[i]=(random(-5,-1));
	}
	clearInterval(changeDirectionInverval);
	isClearChangeDir=true;
}

function spawnBird(){
	if(bird.length<10){
		bird.push(new Bird(random(width),height-100));
	}
	clearInterval(spawnBirdInterval);
	isClearSpawn=true;
}

function updateInterval(){
	if(isClearChangeDir){
		isClearChangeDir=false;
		let time=random(500,1500);
		changeDirectionInverval=setInterval(changeDirection,time);
	}
}
function updateIntervalSpawn(){
	if(isClearSpawn){
		isClearSpawn=false;
		let time=random(2000,8000);
		spawnBirdInterval=setInterval(spawnBird,time);
	}
}

let duckHunt;
let bck;
let cursor;
let duck;
let duck_dead;
let duck_shot;

let color=[0,150,255];

let wall = function(y, h) {
  rect(width / 2, y, width, h);
};

function loadFiles(){
  bck=loadImage("backup.png");
  cursor=loadImage("cursor.png");
  duck = loadAnimation("duck1.png","duck2.png","duck3.png");
  duck_dead= loadAnimation("duck_dead.png");
  duck_shot=loadAnimation("duck_shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadFiles();

  randomSeed(Date);
  duckHunt = new World();
  duckHunt.begin();
	cursorSize=50;
  frameRate(120);
  rectMode(CENTER);
  setInterval(function(){
    if(duckHunt.score>20){
      color[0]=random(0,255);
      color[1]=random(0,255);
      color[2]=random(0,255);
    }
  },500);


}

function draw() {
  background(color[0],color[1],color[2]);
  duckHunt.update();
  image(bck,-100,400,width+100, height-400);
  push();
  translate(mouseX,mouseY);
  image(cursor,-cursorSize/2,-cursorSize/2,cursorSize,cursorSize);
  pop();

}

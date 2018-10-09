let duckHunt;
let bck;
let duck;
let duck_dead;
let duck_shot;
let cursor;
let music;
let backgroundColor=[0,127,255];
let animationBlock=false;
let d;

function preload(){
  cursor=new Cursor(loadImage("assets/cursor.png"));
  music=loadSound("assets/doom.mp3");
  bck=loadAnimation("assets/animations/sprite_00.png","assets/animations/sprite_01.png","assets/animations/sprite_02.png","assets/animations/sprite_02.png",
  "assets/animations/sprite_03.png","assets/animations/sprite_04.png","assets/animations/sprite_05.png","assets/animations/sprite_06.png","assets/animations/sprite_07.png",
  "assets/animations/sprite_08.png","assets/animations/sprite_09.png","assets/animations/sprite_10.png","assets/animations/sprite_12.png","assets/animations/sprite_13.png","assets/animations/sprite_14.png","assets/animations/sprite_15.png","assets/animations/sprite_16.png");
  duck = loadAnimation("assets/duck1.png","assets/duck2.png","assets/duck3.png");
  duck_dead= loadAnimation("assets/duck_dead.png");
  duck_shot=loadAnimation("assets/duck_shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  duckHunt = new World(cursor);
  cursor.begin();
  duckHunt.begin();

  randomSeed(Date);
  frameRate(60);
  rectMode(CENTER);
  console.log(width,height);
  duckHunt.score=0;
  setInterval(function(){
    if(duckHunt.score>=20 && duckHunt.score<=23){
      backgroundColor[0]=random(255);
      backgroundColor[1]=random(255);
      backgroundColor[2]=random(255);
      bck=loadAnimation("assets/animations/highscore/sprite_0.png","assets/animations/highscore/sprite_1.png","assets/animations/highscore/sprite_2.png","assets/animations/highscore/sprite_3.png","assets/animations/highscore/sprite_4.png"
      ,"assets/animations/highscore/sprite_5.png","assets/animations/highscore/sprite_6.png");
      animationBlock=false;
    }
    else{
      backgroundColor[0]=0;
      backgroundColor[1]=127;
      backgroundColor[2]=255;
      if(animationBlock==false){
     bck=loadAnimation("assets/animations/sprite_00.png","assets/animations/sprite_01.png","assets/animations/sprite_02.png","assets/animations/sprite_02.png",
  "assets/animations/sprite_03.png","assets/animations/sprite_04.png","assets/animations/sprite_05.png","assets/animations/sprite_06.png","assets/animations/sprite_07.png",
  "assets/animations/sprite_08.png","assets/animations/sprite_09.png","assets/animations/sprite_10.png","assets/animations/sprite_12.png","assets/animations/sprite_13.png","assets/animations/sprite_14.png","assets/animations/sprite_15.png","assets/animations/sprite_16.png");
   animationBlock=true;
      }
  }
  },500);
  music.play();

}

function draw() {
    background(backgroundColor[0],backgroundColor[1],backgroundColor[2]);
    cursor.update();
    duckHunt.update();
    // image(bck,-100,400,width+100, height-400);
    animation(bck,width/2+100,450);

    if(!music.isPlaying()){
      music.play();
    }
}

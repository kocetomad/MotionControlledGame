class MainMenu{
  constructor(game,cursor){
    this.start=true;
    this.cursor=cursor;
    this.game=game;
    this.logo=loadImage("assets/logo.png");
    this.anim=loadAnimation("assets/button.png");
    this.startButton=createSprite(0,0,window.width/4,window.height/10);
  }

  begin(){
    rectMode(CENTER);

    this.startButton.addAnimation("noxid",this.anim);
  }

  update(){
    this.drawing();
    if(dist(mouseX,mouseY,this.startButton.position.x,this.startButton.position.y)<this.startButton.width){
      this.start=true;
      console.log("asdasdasd");
    }
  }


  drawing(){
    background(120);
    push();
    translate(width/2,height/2);
    this.logo.width=width/2;
    this.logo.height=height/2;
    image(this.logo,-this.logo.width/2,-this.logo.height/2);
    this.startButton.position.y=this.logo.height/2;
    drawSprites();
    pop();
  }
}

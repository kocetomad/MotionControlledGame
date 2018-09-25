class Bird{
  constructor(sprite,x,y){
    this.sprite=sprite;
    this.x=x;
    this.y=y;
    this.size=createVector(50,50);;
    this.speed=1;
    this.dir=1;
    this.killed=false;
    this.sprite=createSprite(0,0,this.size,this.size);
  }

  update(){
    push();
    fill(0);
    noStroke();
    translate(this.x,this.y);
    //Invert the animation if the birds changes direction
    scale(this.dir,1);
    //Upwards rotation
		rotate(-120);
    drawSprites();
    pop();

  }

  move(dirX,dirY){
    this.x+=dirX*this.speed;
    this.y+=dirY*this.speed;
  }


}

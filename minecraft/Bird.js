class Bird{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.size=50;
    this.speed=0.5;

  }

  update(){
    fill(0);
    noStroke();
    rect(this.x,this.y,this.size,this.size);

  }

  move(dirX,dirY){
    this.x+=dirX*this.speed;
    this.y+=dirY*this.speed;
  }


}

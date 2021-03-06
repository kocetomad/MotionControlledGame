class MainMenu {
  constructor(game) {
    this.start = false;
    this.inp;
    this.button;
    this.cursor = cursor;
    this.game = game;
    this.logo = loadImage("assets/logo.png");
  }

  begin() {
    rectMode(CENTER);
    this.drawing();
    this.inp = createInput('');
    this.inp.position(width * 0.5 - this.inp.width * 0.5, this.logo.height + (this.logo.height * 0.5));
    this.button = createButton("Start!").position(this.inp.x, this.inp.y + this.inp.height + 10);
    this.button.mousePressed(this.submitName.bind(this));
    this.game.begin();
  }

  update() {
    if (this.game.lifes <= 0) //End Game
      this.gameOver();

    if (this.start) {
      this.game.update();
    } else {
      this.drawing();
    }
  }
  startGame() {
    this.start = true;
  }
  gameOver() {
    this.start = false;
    this.game.score = 0;
    this.game.lifes = 5;
    allSprites.clear();
    this.button.show();
    this.inp.show();
  }

  submitName() {
    this.game.user_name = this.inp.value();
    this.button.hide();
    this.inp.hide();
    this.startGame();
  }
  drawing() {
    background(120);
    this.logo.width = width / 2;
    this.logo.height = height / 2;
    image(this.logo, this.logo.width / 2, this.logo.height / 2);
  }
}
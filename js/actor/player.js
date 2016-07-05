var Player = function(x, y)
{
  this.x = x;
  this.y = y;

  this.length = 45;
  this.height = 45;

  this.diagonal = (this.length * this.length) + (this.height * this.height);

  //Calculating nearest integer value of diagonal
  this.diagonal = Math.round(Math.sqrt(this.diagonal));
}

Player.prototype.sub_create = function(){
  this.surface = app.game.add.sprite(this.x, this.y, 'player');

  app.game.physics.enable(this.surface, Phaser.Physics.ARCADE);
  this.surface.anchor.setTo(0.5, 0.5);

  //Set surface by default, red
  this.surface.tint = 0xff0000;

}


Player.prototype.sub_update = function(){

  if(app.game.input.activePointer.x <= 640){
    this.surface.tint = 0xff0000;
  } else {
    this.surface.tint = 0x0000ff;
  }

}

app.level1 = {

}

app.level1.create = function(){
  app.game.stage.backgroundColor = '#cc9966';

  this.player = new Player(640, 360);
  this.player.sub_create();

}

app.level1.update = function(){

  this.player.sub_update();
}

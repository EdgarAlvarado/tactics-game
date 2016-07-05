app.load = {

}

app.load.preload = function(){
  //app.game.load.image('player', 'assets/gfx/player.png');
  app.game.load.image("base", "assets/gfx/base.png");
  app.game.load.image("square", "assets/gfx/square.png");
  app.game.load.image("top", "assets/gfx/top.png");
}

app.load.create = function(){
  app.game.state.start('level1');
}

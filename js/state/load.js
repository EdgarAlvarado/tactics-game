app.load = {

}

app.load.preload = function(){
  app.game.load.image('player', 'assets/gfx/player.png');
}

app.load.create = function(){
  app.game.state.start('level1');
}

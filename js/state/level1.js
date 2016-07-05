app.level1 = {

}

app.level1.create = function(){
  //app.game.stage.backgroundColor = '#000000';

  //this.player = new Player(640, 360);
  //this.player.sub_create();

  app.game.scale.pageAlignHorizontally = true;
  app.game.scale.pageAlignVertically = true;
  app.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  var tintColor = app.bgColors[app.game.rnd.between(0, app.bgColors.length - 1)];
  app.game.stage.backgroundColor = tintColor;
  this.leftSquare = app.game.add.sprite(0, app.game.height, "base");
  this.leftSquare.anchor.set(1, 1);
  this.rightSquare = app.game.add.sprite(app.game.width, app.game.height, "base");
  this.rightSquare.anchor.set(0, 1);
  this.leftWall = app.game.add.sprite(0, app.game.height - this.leftSquare.height, "top");
  this.leftWall.anchor.set(1, 1);
  this.rightWall = app.game.add.sprite(app.game.width, app.game.height - this.rightSquare.height, "top");
  this.rightWall.anchor.set(0, 1);
  this.square = app.game.add.sprite(app.game.width / 2, - 400, "square");
  this.square.anchor.set(0.5);
  this.square.scale.setTo(0.2, 0.2);
  this.updateLevel();

}

app.level1.update = function(){

  //this.player.sub_update();
}

app.level1.updateLevel = function() {
    var holeWidth = app.game.rnd.between(app.holeWidthRange[0], app.holeWidthRange[1]);
    var wallWidth = app.game.rnd.between(app.wallRange[0], app.wallRange[1]);
    var leftSquareTween = app.game.add.tween(this.leftSquare).to({
         x: (app.game.width - holeWidth) / 2
    }, 500, Phaser.Easing.Cubic.Out, true);
    var rightSquareTween = app.game.add.tween(this.rightSquare).to({
         x: (app.game.width + holeWidth) / 2
    }, 500, Phaser.Easing.Cubic.Out, true);
    var leftWalltween = app.game.add.tween(this.leftWall).to({
         x: (app.game.width - holeWidth) / 2 - wallWidth
    }, 500, Phaser.Easing.Cubic.Out, true);
    var rightWallTween = app.game.add.tween(this.rightWall).to({
         x: (app.game.width + holeWidth) / 2 + wallWidth
    }, 500, Phaser.Easing.Cubic.Out, true);
    var squareTween = app.game.add.tween(this.square).to({
         y: 150,
         angle: 50
    }, 1000, Phaser.Easing.Cubic.Out, true);
    squareTween.onComplete.add(function(){
         app.game.input.onDown.add(this.grow, this);
         this.rotateTween = app.game.add.tween(this.square).to({
              angle: 40
         }, 300, Phaser.Easing.Linear.None, true, 0, -1, true)
    }, this)
}

app.level1.grow = function(){
     app.game.input.onDown.remove(this.grow, this);
     app.game.input.onUp.add(this.stop, this);
     this.growTween = app.game.add.tween(this.square.scale).to({
          x: 1,
          y: 1
     }, 1500, Phaser.Easing.Linear.None, true);
}

app.level1.stop = function(){
     app.game.time.events.add(Phaser.Timer.SECOND * 2, function(){
          app.game.state.start("PlayGame");
     }, this);
     app.game.input.onUp.remove(this.stop, this);
     this.growTween.stop();
     this.rotateTween.stop();
     this.rotateTween = app.game.add.tween(this.square).to({
          angle: 0
     }, 300, Phaser.Easing.Cubic.Out, true);
     if(this.square.width <= this.rightSquare.x - this.leftSquare.x){
          this.rotateTween.onComplete.add(function(){
               this.fallTween = app.game.add.tween(this.square).to({
                    y: app.game.height + this.square.height
               }, 600, Phaser.Easing.Cubic.Out, true);
          }, this);
     }
     else{
          this.square.anchor.set(0.5, 1);
          if(this.square.width <= this.rightWall.x - this.leftWall.x){
               var destY = app.game.height - this.leftSquare.height;
          }
          else{
               var destY = app.game.height - this.leftSquare.height - this.leftWall.height;
          }
          app.game.add.tween(this.square).to({
               y: app.game.height - this.leftSquare.height
          }, 600, Phaser.Easing.Bounce.Out, true);
     }
}

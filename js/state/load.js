app.load = {

}

app.load.preload = function(){
    //app.game.load.image('player', 'assets/gfx/player.png');
    app.game.load.image("base", "assets/gfx/base.png");
    app.game.load.image("square", "assets/gfx/square.png");
    app.game.load.image("top", "assets/gfx/top.png");
    this.bgColors = [0x62bd18, 0xff5300, 0xd21034, 0xff475c, 0x8f16b2, 0x588c7e, 0x8c4646];
    this.holeWidthRange = [40, 280];
    this.wallRange = [10, 70];
}

app.load.create = function(){
    app.game.state.start('level1');
}

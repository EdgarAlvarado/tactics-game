var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var app = {
	program_name: "Tactics",
	game: new Phaser.Game(x, y, Phaser.AUTO, 'play_area')
}

const config = {
type: Phaser.AUTO,
width: 900,
height: 600,
parent: "game",

scene: [
Menu,
Play,
Tournament,
Training,
Transfer
],

physics: {
default: "arcade",
arcade: {
debug:false
}
}

};

new Phaser.Game(config);

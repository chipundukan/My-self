class Play extends Phaser.Scene {

constructor(){
super("Play");
}

preload(){

this.load.image("pitch","assets/pitch.png");
this.load.image("player","assets/player.png");
this.load.image("ball","assets/ball.png");

}

create(){

this.add.image(450,300,"pitch");

this.player=this.physics.add.sprite(450,300,"player");
this.ball=this.physics.add.sprite(500,300,"ball");

this.cursors=this.input.keyboard.createCursorKeys();

}

update(){

if(this.cursors.left.isDown){
this.player.x-=4;
}

if(this.cursors.right.isDown){
this.player.x+=4;
}

if(this.cursors.up.isDown){
this.player.y-=4;
}

if(this.cursors.down.isDown){
this.player.y+=4;
}

}

}

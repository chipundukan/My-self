class Menu extends Phaser.Scene {

constructor(){
super("Menu");
}

create(){

this.add.text(350,80,"VOLTA FOOTBALL",{fontSize:"40px"});

let play=this.add.text(400,200,"Play",{fontSize:"28px"}).setInteractive();
let tournament=this.add.text(380,260,"Tournament",{fontSize:"28px"}).setInteractive();
let training=this.add.text(390,320,"Training",{fontSize:"28px"}).setInteractive();
let transfer=this.add.text(360,380,"Transfer Market",{fontSize:"28px"}).setInteractive();

play.on("pointerdown",()=>this.scene.start("Play"));
tournament.on("pointerdown",()=>this.scene.start("Tournament"));
training.on("pointerdown",()=>this.scene.start("Training"));
transfer.on("pointerdown",()=>this.scene.start("Transfer"));

}

}

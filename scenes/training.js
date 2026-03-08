class Training extends Phaser.Scene{

constructor(){
super("Training");
}

create(){

this.add.text(360,200,"Training Mode",{fontSize:"32px"});

let back=this.add.text(420,400,"Back",{fontSize:"28px"}).setInteractive();

back.on("pointerdown",()=>this.scene.start("Menu"));

}

}

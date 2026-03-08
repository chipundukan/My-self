class Tournament extends Phaser.Scene{

constructor(){
super("Tournament");
}

create(){

this.add.text(350,200,"Tournament Mode",{fontSize:"32px"});

let back=this.add.text(420,400,"Back",{fontSize:"28px"}).setInteractive();

back.on("pointerdown",()=>this.scene.start("Menu"));

}

}

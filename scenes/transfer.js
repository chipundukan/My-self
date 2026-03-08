class Transfer extends Phaser.Scene{

constructor(){
super("Transfer");
}

create(){

this.add.text(340,200,"Transfer Market",{fontSize:"32px"});

let back=this.add.text(420,400,"Back",{fontSize:"28px"}).setInteractive();

back.on("pointerdown",()=>this.scene.start("Menu"));

}

}

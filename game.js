const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let mode="ai";

function startAI(){
mode="ai";
}

function startPVP(){
mode="pvp";
}

let p1={x:150,y:225,r:15};
let p2={x:750,y:225,r:15};

let ball={x:450,y:225,vx:0,vy:0};

let score1=0;
let score2=0;

let keys={};

document.addEventListener("keydown",e=>keys[e.key]=true);
document.addEventListener("keyup",e=>keys[e.key]=false);

function movePlayers(){

if(keys["ArrowUp"]) p1.y-=4;
if(keys["ArrowDown"]) p1.y+=4;
if(keys["ArrowLeft"]) p1.x-=4;
if(keys["ArrowRight"]) p1.x+=4;

if(mode==="pvp"){

if(keys["w"]) p2.y-=4;
if(keys["s"]) p2.y+=4;
if(keys["a"]) p2.x-=4;
if(keys["d"]) p2.x+=4;

}

if(mode==="ai"){

if(ball.y<p2.y) p2.y-=2;
if(ball.y>p2.y) p2.y+=2;

}

}

function ballPhysics(){

ball.x+=ball.vx;
ball.y+=ball.vy;

ball.vx*=0.98;
ball.vy*=0.98;

}

function kick(player){

let dx=ball.x-player.x;
let dy=ball.y-player.y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<25){

ball.vx=dx*0.6;
ball.vy=dy*0.6;

}

}

document.addEventListener("keydown",e=>{

if(e.code==="Space") kick(p1);

if(e.key==="f" && mode==="pvp") kick(p2);

});

function goalCheck(){

if(ball.x<10 && ball.y>180 && ball.y<270){

score2++;
reset();

}

if(ball.x>890 && ball.y>180 && ball.y<270){

score1++;
reset();

}

document.getElementById("blue").textContent=score1;
document.getElementById("red").textContent=score2;

}

function reset(){

ball.x=450;
ball.y=225;
ball.vx=0;
ball.vy=0;

p1.x=150;
p1.y=225;

p2.x=750;
p2.y=225;

}

function draw(){

ctx.clearRect(0,0,900,450);

ctx.strokeStyle="white";
ctx.strokeRect(0,0,900,450);

ctx.fillStyle="white";
ctx.fillRect(0,180,10,90);
ctx.fillRect(890,180,10,90);

ctx.fillStyle="blue";
ctx.beginPath();
ctx.arc(p1.x,p1.y,15,0,Math.PI*2);
ctx.fill();

ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(p2.x,p2.y,15,0,Math.PI*2);
ctx.fill();

ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(ball.x,ball.y,10,0,Math.PI*2);
ctx.fill();

}

function update(){

movePlayers();
ballPhysics();

kick(p1);
kick(p2);

goalCheck();

}

function loop(){

update();
draw();

requestAnimationFrame(loop);

}

loop();

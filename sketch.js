var runner,path;
var bomb,drink;
var power,coin,edges;
var runnerrunning,leftboundary;
var rightboundary,coinImg;
var pathImg;
function preload(){
  //pre-load images
runnerrunning=loadAnimation("Runner-1.png","Runner-2.png");
pathImg=loadImage("path.png")
bomb=loadImage("bomb.png")
coinImg=loadImage("coin.png")
drink=loadImage("energyDrink.png")
power=loadImage("power.png")
}
function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  runner=createSprite(300,180,60,20)
runner.addAnimation("runnerer",runnerrunning);
runner.scale=0.1
coin=createSprite(200,200,80,90);
coin.addImage(coinImg);
coin.scale=0.3
leftboundary=createSprite(0,0,100,800);
rightboundary=createSprite(410,0,100,800)
leftboundary.visible=false;
rightboundary.visible=false;
}
function draw() {
  background(0);
textSize(10);
text("0",20,230);
path.velocityY=5;
path.scale=1.2;
runner.x=World.mouseX
  if(path.y>400){
path.y=height/2
}
console.log(runner)
//if(runner.isTouching(coin)){
//coinscore=coinscore+1;
//}//

edges=createEdgeSprites()

drawSprites();
}

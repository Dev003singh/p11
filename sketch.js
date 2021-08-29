var ship,shipImg1;
var sea,seaImg;

function preload(){

 seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,700);
  sea  =  createSprite(50,200,1500,10);
sea.addImage("sea",seaImg);
// creating ship

ship = createSprite(200,400,150,10);
ship.addAnimation("ship",shipImg1);
edges = createEdgeSprites();
  //adding scale and position to ship
ship.scale = 0.25;
ship.x = 50;



}

function draw() {
  background(220);
console.log(ship.y)
  sea.velocityX = -2;
 if(sea.x < 0){
   sea.x = sea.width/2;  
 }



drawSprites();
}
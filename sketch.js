var trex,trex_running,edges;

function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,180,20,30);
 trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  
  
  edges=createEdgeSprites();
}

function draw() {
  background(220);
  
  console.log(trex.y); 
  
  
  if(keyDown("space"))
  {trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.8;
  trex.collide(edges[3]);

  drawSprites();
}
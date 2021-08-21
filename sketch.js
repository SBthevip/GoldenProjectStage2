var fixedRect, movingRect;
function preload (){
img1=loadImage("SpaceImg.jpg")
img2=loadImage("Boss'sMinions!!.gif")
img3=loadImage("NewBoss(1).png")
img4=loadImage("Spaceship(PC).png")
img5=loadImage("Minion.png")
}
function setup() {
  createCanvas(1600,700);
  Player1 = createSprite(750, 350);
  Player1.addImage(img4)
  Player1.scale=0.6;
 
}


function draw() {
  background(img1);  

  UFO();
  Droid();
  XanderRocks();
drawSprites();
}
function Droid() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    Player3 = createSprite(1400, 450);
    Player3.addImage(img2)
    Player3.scale=0.4;

    Player3.y = Math.round(random(100,600));
    Player3.velocityX = -10;
    
     //assign lifetime to the variable
    Player3.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
  
}
function UFO() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    
    Player4 = createSprite(1400,100);
    Player4.addImage(img5)
    Player4.scale=0.2;

    Player4.x = Math.round(random(100,1400));
    Player4.y = Math.round(random(100,600));
    Player4.velocityX = Math.round(random(2,5));
    Player4.velocityY = Math.round(random(2,5));
     //assign lifetime to the variable
    Player4.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}
function XanderRocks() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    
    Player2 = createSprite(750,5);
    Player2.addImage(img3)
    Player2.scale=0.5;

    Player2.x = Math.round(random(250,1250));
    
    Player2.velocityY = Math.round(random(1,2));
    
     //assign lifetime to the variable
    Player2.lifetime = 300;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}
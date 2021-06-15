var meet, whitehat;
function setup() {
  createCanvas(800,400);
  meet=createSprite(400, 200, 50, 50);
  meet.shapeColor="blue"
  whitehat=createSprite(300,100,50,50)
  whitehat.shapeColor="blue"
  
  
}

function draw() {
  background("green");  
 whitehat.x=mouseX;
 whitehat.y=mouseY;
 if(whitehat.x-meet.x>meet.width/2+whitehat.width/2 && meet.x-whitehat.x<whitehat.width/2+meet.width/2 &&(whitehat.x-meet.x>meet.width/2+whitehat.width/2 ){
   whitehat.shapeColor="red";
   meet.shapeColor="red"
 }
 else{
   whitehat.shapeColor="blue";
   meet.shapeColor="blue"
 }

 
 
 
  drawSprites();
}
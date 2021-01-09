var frect;
var mrect;


function setup() {
  createCanvas(800,400);
frect=createSprite(200,200,50,50)
frect.shapeColor=("red");
mrect=createSprite(400,200,80,80)
mrect.shapeColor=("blue");
frect.debug=true;
mrect.debug=true;
}

function draw() {
  background("yellow");  
  mrect.x=World.mouseX
  mrect.y=World.mouseY
if (mrect.x-frect.x<frect.width/2+mrect.width/2
  && frect.x-mrect.x<frect.width/2+mrect.width/2
  && frect.y-mrect.y<frect.height/2+mrect.height/2
  && mrect.y-frect.y<frect.height/2+mrect.height/2){
frect.shapeColor=("green")
mrect.shapeColor=("green")
console.log(mrect.x-frect.x)
}
else{
  mrect.shapeColor=("blue");
  frect.shapeColor=("red");
}
  
  
  
  drawSprites();

}
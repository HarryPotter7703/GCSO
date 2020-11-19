var car, wall, carImg;
var speed, weight;

function preload(){
  carImg = loadImage("carImg.jpg");
}

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)

 car=createSprite(50, 200, 50, 50);
car.velocityX = speed;
car.addImage(carImg);
car.scale = 0.3;
//car.debug = true;
wall=createSprite(1500,200,60,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(220);  

  if(wall.x-car.x <= (car.width+wall.width)/5){
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      car.shapeColor=color(230,230,0);
      fill("green");
      textSize(30);
      text("Very unsafe", 700, 150)
      text("Deformation : "+Math.round(deformation), 700, 200);
    }

    
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0); 
      fill("blue");
      textSize(30);
      text("unsafe", 700, 150)
      text("Deformation : "+Math.round(deformation) , 700, 200);
    }
    
    if(deformation<100){
      car.shapeColor=color(0,255,0);
      fill("red");
      textSize(30);
      text("safe", 700, 150)
      text("Deformation : "+Math.round(deformation), 700, 200);
    }
  }
  drawSprites();
}
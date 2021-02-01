var car, carImage;
var line1, line2, line3, line4, line5;

var gameState = "play";

function preload(){
    carImage = loadImage ("images/car.png");
}

function setup(){
    createCanvas(500, 500);

    car = createSprite (245,450);
    car.addImage (carImage);
    car.scale = 0.2;

    line1 = createSprite (245,403,110,3);
    line1.shapeColor = 255,255,255;

    line2 = createSprite (60,25,90,3);
    line2.shapeColor = 255,255,255;

    line3 = createSprite (15,86,3,125);
    line3.shapeColor = 255,255,255;

    line4 = createSprite (60,147,90,3);
    line4.shapeColor = 255,255,255;

    line5 = createSprite (104,86,3,125);
    line5.shapeColor = 255,255,255;
}

function draw(){
    background (194,225,247);
  
  if (gameState==="play"){

    if (keyDown(LEFT_ARROW)){
        car.x = car.x - 3;
    }

    if (keyDown(RIGHT_ARROW)){
        car.x = car.x + 3;
    }

    if (keyDown(UP_ARROW)){
        car.y = car.y - 3;
    }

    if (keyDown(DOWN_ARROW)){
        car.y = car.y + 3;
    }

    if (keyDown(UP_ARROW) && keyDown (RIGHT_ARROW)){
        car.x =  car.x + 3;
        car.y = car.y-3;
    }

    if (keyDown(DOWN_ARROW) && keyDown (LEFT_ARROW)){
        car.x =  car.x - 3;
        car.y = car.y + 3;
    }

    if (car.y<100 && car.x<80)   {
        gameState = "end";
    }
  }

  if (gameState === "end"){
      textSize(20);
      fill(247,0,124);
      text("Game Over",width/2,height/2);
  }
    drawSprites();

    textSize (10);
    fill(0);
    text("Use Arrow Keys to Park the Vehicle",170,20);
}
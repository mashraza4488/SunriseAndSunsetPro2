const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;

var gameState = "onSling";

function preload() {
    //backgroundImg = loadImage("bg.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1520,710);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
      background(backgroundImg);

      

    Engine.update(engine);
    
       
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=19){
        bg = "bg1.jpg";
    }
    else{
        bg = "bg2.jpg;"
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
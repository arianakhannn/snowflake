const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine, world;
var backgroundImg;
var snow1, snow2,snow3,snow4,snow5;
function preload() {
    backgroundImg = loadImage("snow1.jpg");
    snowImg1=loadImage("snow5.webp")

  
}





function setup() {
  engine = Engine.create();
	world = engine.world;
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  snow1=new snow(600,240,60);
  snow2=new snow(200,100,60);
  snow3=new snow(300,350,30);
  snow4=new snow(400,300,40);
  snow5=new snow(480,130,60);



  Engine.run(engine);
}

function draw() {
  background(backgroundImg);
 snow1.display();
 snow2.display();
 snow3.display();
 snow4.display();
 snow5.display();
  drawSprites();


  
}
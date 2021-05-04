const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var backgroundImg;
var blocks=[];

function preload() {
//preload the images here
backgroundImg=loadImage("background.jpg")
}

function setup() {
  createCanvas(1500, 800);
  // create sprites here
	engine = Engine.create();
	world = engine.world;

  ground1=new Ground(450,510,900,10)

  superman=new Superhero(370,280)

  rope1=new Rope(superman.body,{x:290,y:85})


for(var j=20;j<500;j=j+50)
{
blocks.push(new Block(500,j))
}

for(var j=100;j<500;j=j+50)
{
blocks.push(new Block(550,j))
}

for(var j=20;j<500;j=j+50)
{
blocks.push(new Block(600,j))
}

for(var j=50;j<500;j=j+50)
{
blocks.push(new Block(650,j))
}
  
   monster1=new Monster(800,415);

  Engine.run(engine);
}

function draw() {
  background(backgroundImg);
Engine.update(engine);
textSize(20);
text(mouseX,20,30);
text(mouseY,100,30);

for (var i = 0; i < blocks.length; i++) {
     
  blocks[i].display();
  
}


ground1.display();
superman.display();
rope1.display();
monster1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY})
}


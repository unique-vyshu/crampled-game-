
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(20,650,2500,30);

	limb1=createSprite(800,560,30,150);
	limb2=createSprite(890,620,200,30);
	limb3=createSprite(1000,560,30,150);	

	Engine.run(engine);
    paper1 = new Paper(150,550,30);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:115,y:-115});
  
	}
}






const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground,rect1,rect2,rect3
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(200,500,30,30)
	ground = new Ground(400,780,800,10)
	rect1 = new Ground(600,720,10,100)
	rect2 = new Ground(650,770,100,10)
	rect3 = new Ground(700,720,10,100)

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  ground.display()
  rect1.display()
  rect2.display()
  rect3.display()
  drawSprites();
 
}
	function keyPressed(){
		if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-100});

		}
	}



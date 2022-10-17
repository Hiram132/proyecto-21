
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var floor;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		restitution:0.4,
		friction:0.02
	}


	ball = Bodies.circle(30,10,10,ball_options);
    World.add(world,ball);

	floor = Bodies.rectangle(0,680,800,10);
    World.add(world,floor);

	fill("yellow");
    rectMode(CENTER);
    ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
	background("gray");
    Engine.update(engine);

	ellipse(ball.position.x,ball.position.y,10);
    rectangle(floor.position.x,floor.position.y,700,10);

  drawSprites();
 
}

//Me podria ayudar con este proyecto porfavor, no se genera mi piso


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var engine ,world
var ball 


function setup() {
  createCanvas(3000,800);
  
  engine = Engine.create();
    world = engine.world;
   ground1 = new Ground(600,500,1200,10)
    box1 = new Box (900,100,70,70);
    box2 = new Box (900,100,70,70);
    box3 = new Box (900,100,70,70);
    box4 = new Box (900,100,70,70);
    box5 = new Box (900,100,70,70);
    ball = Bodies.circle (300,100,50)
    World.add(world,ball)
    link1 = new Link(ball,{x:100,y:100})
    box6 = new Box (900,100,70,70);
    box7 = new Box (800,100,70,70);
    box8 = new Box (800,100,70,70)
    box9 = new Box (800,100,70,70);
    box10 = new Box (600,100,50,50);
    box11 = new Box (600,100,50,50);
    box12 = new Box (600,200,50,50);
    box13 = new Box (700,200,70,70);
    box14 = new Box (700,200,70,70);
    box15 = new Box (700,200,70,70);
    box16 = new Box (700,200,70,70);
    box17 = new Box (700,200,70,70);
    box18 = new Box (700,200,70,70);
    box19 = new Box (700,200,70,70);
    box20 = new Box (700,200,70,70);

}

function draw() {
  background("orange");  
 
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ellipse(ball.position.x,ball.position.y,50,50)
 link1.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}
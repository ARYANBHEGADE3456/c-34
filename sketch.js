const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  
  box1 = new Box(700,555,25,40);
 box2 = new Box(725,555,25,40)
 box3 = new Box(750,555,25,40)
 box4 = new Box(775,555,25,40)
 box5 = new Box(800,555,25,40)
 box6 = new Box(710,525,25,40)
 box7 = new Box(735,525,25,40)
 box8 = new Box(760,525,25,40)
 box9 = new Box(785,525,25,40)
 box10 = new Box(720,490,25,40)
 box11 = new Box(745,485,25,40)
 box12 = new Box(770,485,25,40)
 box13 = new Box(745,455,25,40)
}

function draw() {
  background(bg);
  Engine.update(engine);
  textSize(40)
  text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY)
  ground.display();
 
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

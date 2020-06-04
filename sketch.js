const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  ground= new Ground(600,height,1200,20);

  box1= new Box(330,235,30,40);
  box2= new Box(360,235,30,40);
  box3= new Box(390,235,30,40);
  box4= new Box(420,235,30,40);

  box5= new Box(360,195,30,40);
  box6= new Box(390,195,30,40);
  box7= new Box(420,195,30,40);

  box8= new Box(390,155,30,40);

  polygon= new Polygon(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
  
}

function draw() {
  background(0);  

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  box5.display();
  box6.display();
  box7.display();

  box8.display();

  polygon.display();

  drawSprites();
}
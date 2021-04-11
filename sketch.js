const Engine  = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,stone,Rubber;
var sand1,sand2,sand3,sand4,sand5,sand6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber = new rubber(900,450,70);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new stone(700,320,100,100);
    iron = new iron(300,350);

    sand1 = new sand1(505,450,10);
    sand2 = new sand2(510,450,10);
    sand3 = new sand3(515,450,10);
    sand4 = new sand4(520,450,10);
    sand5 = new sand5(525,450,10);
    sand6 = new sand6(515,455,10);
   
    
}function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var borracha, ferro, pedra;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  pedra = new Rock(200,500,60,80);
  borracha = new Rubber(400,540,70);
  ferro = new Iron(500,520,20,70);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

ferro.display();
    borracha.display();
    pedra.display();
    
 
}
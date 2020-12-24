var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
var Constraint = Matter.Constraint 

var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11
function setup(){
    var canvas = createCanvas(1000,600)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,570,1000,40)
    box1 = new Box(600,500,50,50)
}


   

function draw(){
    background("black");
    ground.display();
    box1.display();
}


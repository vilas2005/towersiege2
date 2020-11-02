const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball , slingshot;


function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    

    stand = new Ground (600,500,400,10);
    
    ground = new Ground (600,700,1200,10);

    box1 =  new Box (500,450,40,40);
    box2 =  new Box (540,450,40,40);
    box3 =  new Box (580,450,40,40);
    box4 =  new Box (620,450,40,40);
    box13 = new Box (660,450,40,40);
    box16 = new Box (700,450,40,40);

    box5 = new Box (500 ,420,40,40);
    box6 = new Box (540,420,40,40);
    box7 = new Box (580,420,40,40);
    box8 = new Box (620,420,40,40);
    box14=new Box (660,420,40,40);
    box17= new Box (700,420,40,40);

    box9  = new Box (500 ,390,40,40);
    box10 = new Box (540,390,40,40);
    box11 = new Box (580,390,40,40);
    box12 = new Box (620,390,40,40);
    box15 = new Box (660,390,40,40);
    box18 = new Box (700,390,40,40);

    box19 =  new Box (540,360,40,40);
    box20=  new Box (580,360,40,40);
    box21=  new Box (620,360,40,40);
    box22 = new Box (660,360,40,40);

    box23 = new Box (600,330,45,45);

    ball1 = new Ball  (200,50,25);

    stand2 = new Ground (900,400,100,10);

    box24 = new Box (880,380,40,40);
    box25 = new Box (920,380,40,40);

    box26 = new Box (900,350,40,40);
     

    slingshot = new SlingShot (ball1.body,{x:300,y:200})
    
}

function draw(){
    background("orange");
    
    Engine.update(engine);
    //strokeWeight(4);
    ball1.display();
    ground.display();
    stand2.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
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
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    slingshot.display();
}


function mouseDragged(){
    
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball1.body);
    }
}
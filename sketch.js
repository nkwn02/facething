let openmouth;
let mic;
let look;
let myLeaves = [];

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();  
  for (let i = 0; i < 40; i++) {
    let x = random (width*0.075,width*0.925);
    let y = random (height*0.075,height*0.925);
    myLeaves[i] = new leaf(x,y);
  }
}

function draw() {
//console.log("mic level" + mic.getLevel());
  
  vol = mic.getLevel();
  openmouth = map(mic.getLevel(), 0, .5, 0, 265)
  
  if(mouseX > width*.65 &&  mouseX < width*.80) {
    if(mouseY > height*.30 && mouseY < height*.50) {
      look = 1;
    } else {
      look=0;
    }
  } else {
    look = 0;
  }

  
  background(89, 105, 20);
  for (let i = 0; i < 40; i++) {
    myLeaves[i].display();
    myLeaves[i].move();
  }  
  
  bushes()
  branch()
  legs()
  body()
  face()
  mouth(openmouth)
  antenna()

}

function bushes() {
  //back bush
  push();
  fill(72, 133, 29);
  noStroke();
  ellipse(1, 400, 200, 150);
  ellipse(100, 380, 200, 150);
  ellipse(200, 400, 200, 150); 
  ellipse(200, 400, 200, 150);
  pop();
  
  //closest bush
  push();
  fill(93, 166, 41);
  noStroke();
  ellipse(300, 420, 200, 150);
  ellipse(400, 370, 200, 150);  
  pop();
  
}

function branch() {
  //branch
  fill(79, 47, 9);
  rotate(-.3);
  rect(-250, 300, 450, 20, 5);
  
}

function legs(){
  //legs
  rotate(0);
  
  //back legs far left
  fill(180,0,0);
  rect(120, 270, 20, 40, 20);
  fill(200,0,0);
  rect(130, 270, 20, 40, 20);
  
  //front legs far right
  fill(180,0,0);
  rect(170, 270, 20, 40, 20);
  fill(200,0,0);
  rect(160, 270, 20, 40, 20);
  
}

function body(){
  
  //tailend
  (pop)
  fill(0,157,0);
  ellipse(-5,350,60+(sin(frameCount/20)*8),50-(sin(frameCount/20)*5));
  //ellipse(-5, 350, 60, 50);
  (push)
  
  //back torso 2
  fill(0,180,0);
  ellipse(-40, 320, 80, 90);
  ellipse(-5, 280, 90, 80);
  
  //middle torso 3
  fill(0,200,0);
  ellipse(25, 260, 70, 90);
  ellipse(50, 230, 90, 75);
  ellipse(100, 220, 90, 75);
 
  //front torso 2
  fill(0,180,0);
  ellipse(130, 240, 65, 75);
  ellipse(170, 250, 90, 70);
  
  //head
  fill(0,200,0);
  ellipse(220, 250, 100, 90);
  
}

function face() {
  //eyeball
  fill(255);
  ellipse(245, 245, 20, 20);
  ellipse(205, 235, 20, 20);
  
  //pupil
  fill(0);
  if (look == 0){
  ellipse(245, 245, 10, 10);
  ellipse(205, 235, 10, 10);
  } else if (look==1) {
  ellipse(240, 245, 10, 10);
  console.log("hi")
    ellipse(210, 235, 10, 10);
  }
}
    
  function mouth(){
  //mouth
  ellipse(220, 265, 40, 1 + vol * 200);
  
  }

function antenna(){
  //stalk
  fill(170,0,0);
  rect(200, 150, 10, 60);
  rect(230, 160, 10, 54);
  
  //tips
  fill(200,0,0);
  ellipse(235, 160, 20, 20);
  ellipse(205, 150, 20, 20);
}
  
 class leaf {
   constructor(xpos, ypos){
     this.xpos = xpos;
     this.ypos = ypos;
     this.t = int(random(30));
     this.s = random(0, 0.1);
   }
 display() {
    push();
  translate(this.xpos, this.ypos);
  rotate(this.t);
   noFill();
  arc(50, 55, 60, 60, HALF_PI, PI);
  bezier(20, 55, 20, 70, 60, 70, 55, 83);
  line(30, 70, 65, 90);    
    pop();
 }
   move() {
     this.t = this.t + this.s;
   }
}







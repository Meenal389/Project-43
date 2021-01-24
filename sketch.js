

function setup() {
  createCanvas(500,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  let hr = hour()
  let min=minute();
  let sec=second()

  strokeWeight(4)
  stroke("yellow")
  noFill()
  scangle=map(sec,0,60,0,360)
  arc(0,0,300,300,0,scangle)

  stroke(224,29,206);
  let minangle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minangle);
  
  stroke(146,240,71);
  let hourangle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hourangle);

  push();
  rotate(scangle);
  stroke("cyan");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(minangle);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hourangle);
  stroke(167,19,234);
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  

  drawSprites();
}
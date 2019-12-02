  //generative leafs

  let leafs = [];
  let numLeafs = 100;

  function setup() {
    createCanvas(windowWidth, windowHeight);

    for(var i = 0; i < numLeafs; i++) {
      leafs[i] = new Leaf();
    }
  }

  function draw() {
    background(0);
    // fill(255);
    // rect(0, height/2, width, height/2);


    for(var i = 0; i < numLeafs; i++) {
      leafs[i].display();
      leafs[i].move();
    }

    drawQuote(20, 20);

}

// Leaf class
class Leaf {
  constructor(temp_x, temp_y) {
    this.x = random(width);
    this.y = random(height);
    // this.x = temp_x;                   
    // this.y = temp_y;
    this.rotate = random(360);
    this.color = color(random(150), random(50, 150), random(50), random(50, 100));
    this.strokeColor = random(255);
    
    this.speed = random(2);
    this.rotSpeed = random(-.007, .007);
    
    this.vectors = [];
    this.numPoints = 10;
    this.heightVar = random(5, 20);
    this.widthVar = random(5, 15);
    
    for(var i = 1; i < this.numPoints-1; i++) {
      this.vectors[i] = createVector(random(this.widthVar)+i*this.widthVar/random(2, 3), i*this.heightVar);
    }
    this.vectors[0] = createVector(0, 0);
    this.vectors[this.numPoints-1] = createVector(0, i*this.heightVar);
  }
  
  move() {
    this.x+=this.speed;
    this.rotate+=this.rotSpeed;
    if(this.x > width+100) this.x = -100;
    
  }
 
  display() {
    this.drawLeaf(this.x, this.y);
  }
  
  drawLeaf() {
    push();
    translate(this.x, this.y);
    rotate(this.rotate);
    this.drawLeafside(0, 0);
    scale(-1, 1);
    this.drawLeafside(0, 0);
    pop();
  }
  
  drawLeafside() {
    fill(this.color);
    stroke(this.strokeColor);

    strokeWeight(.3);
    beginShape();
    curveVertex(this.vectors[0].x, this.vectors[0].y);;
    for(var i = 0; i < this.numPoints; i++) {
      curveVertex(this.vectors[i].x, this.vectors[i].y);
    }
    curveVertex(this.vectors[this.numPoints-1].x, this.vectors[this.numPoints-1].y);;
    endShape();

    fill(50, 50, 0, 50);
    noStroke();
    beginShape();
    vertex(0, 0);
    vertex(this.widthVar/6, this.vectors[this.numPoints-1].y+(this.vectors[this.numPoints-1].y/3));
    vertex(0, this.vectors[this.numPoints-1].y+(this.vectors[this.numPoints-1].y/3));
    vertex(0, 0);
    endShape();
    
    stroke(this.strokeColor);
    line(0, 0, 0, this.vectors[this.numPoints-1].y+(this.vectors[this.numPoints-1].y/3));

    //draw curvevertex points
    strokeWeight(3);
    stroke(this.strokeColor);
    for(var i = 0; i < this.numPoints; i++) {
      point(this.vectors[i].x, this.vectors[i].y);
    }

  }
  
}



function drawQuote(posX, posY) {
  push();
  translate(posX, posY);
  fill(255);
  noStroke();
  textFont('Helvetica');
  textSize(20);
  text("We should encourage algorithms that facilitate human collaboration, interaction and engagement", 10, 20);
  text("with each other, with society, and with nature", 10, 50);
  textSize(10);
  text("via Victor Galaz", 10, 70);
  pop();
 
}

function mousePressed() {
  setup();
}
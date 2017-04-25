var ballX; //declares variables called ballX and ballY
var ballY;
var ballSpeedX;//sets variables ballSpeedX and Y equal to 5
var ballSpeedY;
var paddleHeight;//makes the original paddle height 30
var paddleColor; 
var transpColor;

function setup() {
  createCanvas(800, 400);//sets the canvas size to 800 by 600
  noCursor();//disables the cursor from showing up inside the canvas
  ballX = width/2;//when the code starts, the ball will be positioned in the middle
  ballY = height/2;//of the canvas
  ballSpeedX = 5;
  ballSpeedY = 5;
  paddleHeight = 30;
  transpColor = 255;
}

function draw() {  //this loop will run forever
  fill(0,0,0,transpColor);
  background(255);//sets the background color to grey
  moveBall();//runs function moveBall
  checkCollide();//checks collision from the ball
  drawPaddle();//draws the moveable paddle
  drawBall();//draws the ball
}

function moveBall() { 
  ballX = ballX + ballSpeedX;//changes the balls x and y positions
  ballY = ballY + ballSpeedY;//so that they can move
  prvarln("ballSpeedX: " + ballSpeedX + ", ballSpeedY: " + ballSpeedY);//will prvar text in console indicating the speed of the ball
}

function checkCollide() {
  if (ballX < 0 || ballX > width) { //checks if the ball hits the side of the canvas
    ballSpeedX = ballSpeedX * -1;//will reverse the balls direction
  }
  if (ballY < 0) { //checks if the ball hits the top of the canvas
    ballSpeedY = ballSpeedY * -1;//reverses the balls direction
  }
  if (ballY > height-paddleHeight) { //checks if the ball 
    if (ballX > mouseX && ballX < mouseX + 200) { //is hitting the paddle
      ballSpeedY = ballSpeedY * -1;//reverses the balls direction
      transpColor = transpColor - 40;
      transpColor = constrain(transpColor,5,255);
    } 
    else {//if the ball doesn’t hit the paddle
      text("GAME OVER!", width/2, height/2);//prints GAME OVER at the center of the canvas
      noLoop();//ends the code
    }
  }
}

function drawBall() {
  noStroke();//disables outlines of the shape
  ellipse(ballX, ballY, 20, 20);//draws a circle
}

function drawPaddle() {
  stroke(paddleColor);//the outlines color will be set to paddleColor’s value
  strokeWeight(4);//thickens the outline
  rect(mouseX, height-paddleHeight-4, 200, paddleHeight);//draws a rectangle that follow the mouse
}

function mousePressed() {//when the mouse is pressed
  paddleColor = (map(mouseX, 0, width, 0, 255));//changes the value of paddleColor based 
//on the position of the mouse’s X coordinate
}

function keyPressed() {//when the keys
  if (key == 'b' || key == 'B') {//b or B is pressed
    fill(0);//fills the colors of the shape to black
  }
  if (key == 'w' || key == 'W') {//when the keys w or W are pressed
    fill(255);//fills the colors of the shape to white
  }
}
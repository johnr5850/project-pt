int ballX; //declares variables called ballX and ballY
int ballY;
int ballSpeedX = 5;//sets variables ballSpeedX and Y equal to 5
int ballSpeedY = 5;
int paddleHeight = 30;//makes the original paddle height 30
int paddleColor; 
int transpColor = 255;
int autoX;
int autoY;

void setup() {
  size(800, 400);//sets the canvas size to 800 by 600
  noCursor();//disables the cursor from showing up inside the canvas
  ballX = width/2;//when the code starts, the ball will be positioned in the middle
  ballY = height/2;//of the canvas
}
void draw() {  //this loop will run forever
  fill(0,0,0,transpColor);
  background(255);//sets the background color to grey
  moveBall();//runs function moveBall
  checkCollide();//checks collision from the ball
  drawPaddle();//draws the moveable paddle
  drawBall();//draws the ball
}
void moveBall() { 
  ballX = ballX + ballSpeedX;//changes the balls x and y positions
  ballY = ballY + ballSpeedY;//so that they can move
  println("ballSpeedX: " + ballSpeedX + ", ballSpeedY: " + ballSpeedY);//will print text in console indicating the speed of the ball
}
void checkCollide() {
  if (ballX < 0 || ballX > width) { //checks if the ball hits the side of the canvas
    ballSpeedX = ballSpeedX * -1;//will reverse the balls direction
  }
  if (ballY < 0) { //checks if the ball hits the top of the canvas
    ballSpeedY = ballSpeedY * -1;//reverses the balls direction
  }
  if (ballY > height-paddleHeight) { //checks if the ball 
    if (ballX > mouseX && ballX < mouseX + 200) { //is hitting the paddle
      ballSpeedY = ballSpeedY * -1;//reverses the balls direction
      transpColor = transpColor - 40; //decrements transparancy levels of the ball
      transpColor = constrain(transpColor,5,255);
      }
    else if () {
        
      }
    else {//if the ball doesn’t hit the paddle
      text("GAME OVER!", 375, 200);//prints GAME OVER at the center of the canvas
      noLoop();//ends the code
    }
  }
}
void drawBall() {
  noStroke();//disables outlines of the shape
  ellipse(ballX, ballY, 20, 20);//draws a circle
}
void drawPaddle() {
  stroke(paddleColor);//the outlines color will be set to paddleColor’s value
  strokeWeight(4);//thickens the outline
  rect(mouseX, height-paddleHeight-4, 200, paddleHeight);//draws a rectangle that follow the mouse
  rect(30,80,200,paddleHeight);
}



 var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = myCanvas.width / 20; //These 2 variables determine the starting circles location, in this case, the top left of the screen.
var y = myCanvas.height / 20;

var dx = 10; //These variables will be used later to change the position of the circle.
var dy = 10; //Changing both of these numbers will also change the speed of the circle (in other words, how many units the circle moves per frame).

var gravity = 0.2; //Sets the gravity pulling the ball to the ground. // changed gravity to make ball more controlable
var damping = 0.2; //The rate at which the ball slows down.
var ballSize = 10; //Sets the circle's radius. // doubled ball radius

function drawCircle() { //draws circle
  ctx.beginPath();
  ctx.arc(x, y, ballSize, 0, Math.PI*2); //The circle, on frame one, will always start at the top left, and its size will always be set to ballSize.
  ctx.fillStyle = "#FF00FF"; //Sets the color of the circle to light blue.
  ctx.fill(); //Fills in the circle with the color provided in fillStyle.
  ctx.stroke();
}

function draw() {
   //Clears the canvas every frame, so a new circle can be drawn.


  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  drawCircle();


  // draws pipe on screen
  ctx.beginPath();
  ctx.rect(170, 190, 70, 190); // coordiates of rectangle (pipe)
  ctx.rect(162, 157, 86, 33);// coordiates of rectangle
  ctx.stroke();
  ctx.fillStyle = "green"
  ctx.fill(); // fills pipe with color above




  if (x + dx > c.width - ballSize || x + dx < ballSize) { //If the circle's x position exceeds the width of the canvas...
    dx = -dx; //The ball's x direction will be flipped, and it will bounce a specific distance (damping).
  }

  if(y + dy > c.height - ballSize || y + dy < ballSize) { //If the circle's y position exceeds the height of the canvas...
    dy = -dy * damping; //Its y direction will be flipped, and it's speed will decrease.
  }

  dy += gravity; //Adds the gravity value to the ball's dy value, giving it a artificial force of gravity.
  x += dx;

  if (((y + dy) + ballSize) <= c.height) {
    y += dy;
  }
}

setInterval(draw, 15);

document.addEventListener("keydown", makeBounce);
 function makeBounce(e) {
   if (e.key == " ") {
     dy -= 10;
   }
   if (e.key == "r") {
     dx = -dx;
   }
 }


 var rect1 = {x:170 , y:190 , width:70 , height:190 }
var rect2 = {x:162 , y:157 , width: 86, height:33 }

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    // collision detected!
}

// filling in the values =>

/*if (170 < 30 &&
    55 > 20 &&
    162 < 20 &&
    55 > 10) {
    // collision detected!
    */

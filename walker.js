// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = true;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = 10;
var xPos = leftBorder;

// The update function is called once every "frame" (via setInterval)
// Changing the walker's position each frame, will cause him to move across the screen
function update() {
  // ensure walker is facing to the right (reverse of "normal")
  // CSS does this for us, we just assign the right class.

  // function walkLeft(){
  //   xPos -= speed;
  //   walker.classList.toggle("flip");
  // }
  //
  // function walkRight(){
  //   xPos += speed;
  //   walker.classList.toggle("flip");
  // }
  // walker.classList.toggle("flip");

  if (walkingLeft){
    // walkLeft();
    xPos -= speed;
  } else {
    // walkRight();
    xPos += speed;
  }

  if (walkingLeft){
    xPos -= speed;
  }else{
    xPos += speed;
  }
  // Move "speed" pixels per iteration:
  walker.style.left = xPos + "px";

  if (xPos < leftBorder || xPos > rightBorder) {
    // css controls visual, we just ensure the correct class is assigned to walker
    walker.classList.toggle("flip");
    walkingLeft = !walkingLeft;
  }
};
walker.addEventListener('click', function() {
  walker.classList.toggle("flip");
  walkingLeft = !walkingLeft;
});
// Establish an update interval (framerate)
// This will call the "update" method every 100ms
// Add code to "update" to change the walker's position
setInterval(update, 100);

// Change right border when resized
window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
});

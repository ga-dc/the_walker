
// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = true;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = 10;
var xPos = rightBorder;

// The update function is called once every "frame" (via setInterval)
// Changing the walker's position each frame, will cause him to move across the screen
function update() {
  // ensure walker is facing to the right (reverse of "normal")
  // CSS does this for us, we just assign the right class.
  walker.classList.toggle("flip");

  // Move "speed" pixels per iteration:
  xPos += 15;
  // Reset back to left side, when we run into right wall
  if(xPos >= rightBorder){
    xPos = leftBorder;
  }
  // reposition the walker
  walker.style.right = xPos + "px";
};

// Establish an update interval (framerate)
// This will call the "update" method every 100ms
// Add code to "update" to change the walker's position
setInterval(update, 100);

// Change right border when resized
window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
});

walker.addEventListener('click', function() {
  walker.classList.toggle("flip");
  walkingLeft = !walkingLeft;
});

// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him

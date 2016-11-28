// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = false;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = -10;
var xPos = rightBorder;

// The update function is called once every "frame" (via setInterval)
// Changing the walker's position each frame, will cause him to move across the screen
function update() {
  // ensure walker is facing to the right (reverse of "normal")
  // CSS does this for us, we just assign the right class.
  walker.classList.add();

  // Move "speed" pixels per iteration:
  xPos += speed;
  // Reset back to left side, when we run into right wall
  if(xPos >= rightBorder){
    xPos = rightBorder;
    speed = -10;
    walker.classList.remove("flip");
  }
  else if(xPos <= leftBorder){
    xPos = leftBorder;
    speed = 10;
    walker.classList.add("flip");
  }
  // reposition the walker
  walker.style.left = xPos + "px";

};

walker.addEventListener("click",function(){
  speed = -(speed);
  if(walker.classList == "flip"){
    walker.classList.remove("flip");
  }
  else{
    walker.classList.add("flip");
  }
});
/*walker.addEventListener("onkeydown",function(key){

  switch(key){
    case "37": function(){
    walker.classList.add("flip");
    speed = -(speed);
  },
    case "39": function(){
      walker.classList.remove("flip");
      speed = -(speed);
    }
  }

});
*/


// Establish an update interval (framerate)
// This will call the "update" method every 100ms
// Add code to "update" to change the walker's position
setInterval(update, 100);

// Change right border when resized
window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
  leftBorder = window.innerWidth - walker.offsetWidth;
});

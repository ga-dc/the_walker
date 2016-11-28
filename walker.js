// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him
// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = true;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = 35;
var xPos = rightBorder;

// The update function is called once every "frame" (via setInterval)
// Changing the walker's position each frame, will cause him to move across the screen
function update() {

  // Reset back to left side, when we run into right wall
  if(walkingLeft){
    xPos -= speed;
  }
  else{
    xPos += speed;
  }

  // ensure walker is facing to the right (reverse of "normal")
  // CSS does this for us, we just assign the right class.
  if (xPos<leftBorder || xPos > rightBorder){
    walker.classList.Add("flip");
    walkingLeft = !walkingLeft;
  }
  // reposition the walker
  walker.style.left = xPos + "px";
}
// Establish an update interval (framerate)
// This will call the "update" method every 100ms
// Add code to "update" to change the walker's position
// setInterval(update, 2000);

// Change right border when resized
window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
});



var arasquotebutton = document.getElementById('quotebutton');

var url = "http://api.icndb.com/jokes/random"; // + araskeyword;
console.log(url);

function quotefunction(){
//var http = httpxmlrequest
//http.ajax
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  })
  .done(function(response){
    console.log(response);
    document.getElementsByTagName('h1')[0].innerHTML=response.value.joke;
  });
}

arasquotebutton.addEventListener('click', quotefunction);

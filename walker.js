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
if(walkingLeft){
  // Move "speed" pixels per iteration:
  xPos -= speed;
  // Reset back to left side, when we run into right wall
  if(xPos <= leftBorder){
    $("#walker").toggleClass("flipped");
    walkingLeft = false;
  }
  // reposition the walker
  walker.style.left = xPos + "px";
} else if (walkingLeft === false) {
    // Reset back to left side, when we run into right wall
    xPos += speed;
    if(xPos >= rightBorder){
      $("#walker").toggleClass("flipped");
      walkingLeft = true;
    }
    // reposition the walker
    walker.style.left = xPos + "px";
    }
}


// Establish an update interval (framerate)
// This will call the "update" method every 100ms
// Add code to "update" to change the walker's position
setInterval(update, 100);

// Change right border when resized
window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
});
let url = "http://quotes.stormconsultancy.co.uk/random.json";
$("#walker").click(function(){
    $(".quote").empty();
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json"
    }).done(function(response){
  $(".quote").append("<blockquote>" + response.quote + "</blockquote>");
  $(".quote").append("<p class='author'>-" + response.author + "</p>");
}).fail(function (){
  console.log("fail");
});
});

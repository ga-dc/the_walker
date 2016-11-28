// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingRight = true;
var leftBorder = 400;
var rightBorder = 700;//window.innerWidth - walker.offsetWidth;
var speed = 5;
var xPos = rightBorder;
// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him
function upDate(){
  //xPos += walkingLeft ? -speed : speed;
  if(walkingLeft){
    xPos -= speed;
  }
  else{
    xPos += spped;
  }
  walker.style.left = xPos + 'px';

  if (xPos < leftBorder || xPos > rightBorder){
    walker.classlist.toggle('flip');
    walkingLeft = !walkingLeft;
  }
}

setInterval (update, 100);

walker.addEventListener ('click', function(){
  walker.classList.toggle('flip');
  walkingLeft = !walkingLeft;
});

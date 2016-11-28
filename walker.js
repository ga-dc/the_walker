// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = true;
var leftBorder = 700;
var rightBorder = /*400;*/window.innerWidth - walker.offsetWidth;
var speed = 5;
var xPos = leftBorder;
// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him
function upDate(){
  //xPos += walkingLeft ? -speed : speed;
  if(walkingRigth){
    xPos += speed;
  }
  else{
    xPos -= spped;
  }
  walker.style.right = xPos + 'px';

  if (xPos < rightBorder || xPos > leftBorder){
    walker.classlist.toggle('flip');
    walkingRight = !walkingRight;
  }
}

setInterval (update, 100);

walker.addEventListener ('click', function(){
  walker.classList.toggle('flip');
  walkingRight = !walkingRight;
});

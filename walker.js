// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = true;
var leftBorder = 0;
var rightBorder = /*400;*/window.innerWidth - walker.offsetWidth;
var speed = 80;
var xPos = rightBorder;
// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him
function upDate(){
  //xPos += walkingLeft ? -speed : speed;
  /*walker.classList.add('flip');
  xPos += spped;
  if(xPos >= rightBorder){
    xPos = leftBorder;
  }*/

/*walker.style.left = xPos + "px";
 };*/

if(walkingLeft){
    xPos -= speed;
  }
  else{
    xPos += speed;
  }
  walker.style.left = xPos + 'px';



if (xPos < leftBorder || xPos > rightBorder)
    {walker.classList.toggle('flip');
    walkingLeft = !walkingLeft;
    //walker.style.left = xPos + 'px';
  }
}

setInterval (upDate, 100);

walker.addEventListener ('click', function(){
  walker.classList.toggle('flip');
  walkingLeft = !walkingLeft;
});

window.addEventListener("resize", function(){
  rightBorder = window.innerWidth - walker.offsetWidth;
});

//isTouching function 
function isTouching (obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
        return true 
  }
  else {
      //movingrect.shapeColor="green";
     //fixedrect.shapeColor="green";
        return false
  }
  }

  //BounceOff
  function bounce(object1,object2)
{
   if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2)
    {
      object1.velocityX=object1.velocityX*-1;
      object2.velocityX=object2.velocityX*-1;
    }
   else if(object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2 )
    {
      object1.velocityY=object1.velocityY*-1;
      object2.velocityY=object2.velocityY*-1;
    
    }
}

//Collided function
function hasCollided(object1,object2)
{
    rightedge=object1.x+object1.width;
    leftedge=object2.x;
    if(rightedge>=leftedge)
    {
        return true;
    }
    else
    {
        return false;
    }

}

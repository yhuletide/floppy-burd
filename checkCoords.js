//function checkCoord(coord, limits){=};


//function multiCheck(xSmall, xBig, y, limits){=}



//assusems we have a rectangle
// coord of inntrest if oit is a rect is not origin
//want to know if bird is going up and down
// y or y = height

//assuming no collison
/*
coord-x and y of inrest of bird in the format of x;num y:num
pipe-the 2 xes and 2 ys from the box {xmin: num, xmax: num, ymax, num}
returns true if collison
*/
function collision1(coord, pipe){
var inx = false
var iny = false

  if ((coord.x >= pipe.xmin) && (coord.x<= pipe.xmax)){ inx = true; }
  if ((coord.y >= pipe.ymin) && (coord.y<= pipe.ymax)){ inx = true; }

{
return (inx && iny);
}
}
// assume we have a rectangle
/*
bigCoord - larger x coord
smallCoord - smaller x coord
pipe - pipe as for collison 1 above
uses the y from the big bigCoord
*/
function checkX(bigC, smallC, pipe){

    for (var i = smallC.x; i <= bigC.x; i++) {
      if (collision1({x: i, y: bigC.y},pipe)) {return true;}
      }
      return false;
    }

function checkY(bigC, smallC, pipe){

    for (var i = smallC.y; i <= bigC.y; i++) {
      if (collision1({y: i, y: bigC.x}, pipe)) {return true;}

      }
      return false;
    }

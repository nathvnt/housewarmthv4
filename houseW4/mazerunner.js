

tileW = 22.155;
tileH = 22.155;

tileRowCount = 16;
tileColumnCount = 16;

var tiles = [];
for (c = 0; c < tileColumnCount; c++) {
  tiles[c] = [];
  for (r = 0; r < tileRowCount; r++) {
    tiles[c][r] = {x: c*(tileW+3), y: r*(tileH+3), state: 'e'}; 
  }
}

tiles[0][0].state = 's';
tiles[tileColumnCount-1][tileRowCount-1].state = 'f';

boundX = 0;
boundY = 0;

var canvas2;
var ctx2;
var output;

window.onload = function () {
  canvas2 = document.getElementById("maze");
  ctx2 = canvas2.getContext("2d");
  output = document.getElementById("outcome");

  canvas2.onmousedown = myDown;

  canvas2.onmouseup = myUp;

  return setInterval(draw, 10);

}

function rect(x,y,w,h,state) {
  //red red green green blue blue
  if (state == 's') {
    ctx2.fillStyle = '#9ACD32';
  }
  else if (state == 'f') {
    ctx2.fillStyle = '#FF7F50';
  }
  else if (state == 'e') {
    ctx2.fillStyle = '#4B0082';
  }
  else if (state == 'w') {
    ctx2.fillStyle = '#20B2AA';
  }
  else if (state == 'x') {
    ctx2.fillStyle = '#FFD700';
  }
  else {
    ctx2.fillStyle = '#4B0082';
  }

  ctx2.beginPath();
  ctx2.rect(x,y,w,h);
  ctx2.closePath();
  ctx2.fill();
}

function draw() {

  ctx2.clearRect(0,0,canvas2.width,canvas2.height);

  for (c = 0; c < tileColumnCount; c++) {
    for (r = 0; r < tileRowCount; r++) {
      rect(tiles[c][r].x, tiles[c][r].y, tileW, tileH, tiles[c][r].state);
    }
  }

}

function distanceToFinish (xVal, yVal) {
  return (xVal-24)*(xVal-24) + (yVal-24)*(yVal-24);
}

function solveMaze() {

  var queue = [[0, 0]];

  var xLoc;
  var yLoc;

  var pathFound = false;
  while (queue.length > 0 && !pathFound) {

    xLoc = queue[0][0];
    yLoc = queue[0][1];
    var index = 0;
    for (var i = 1; i < queue.length; i++) {
      if (distanceToFinish(queue[i][0], queue[i][1]) < distanceToFinish(xLoc, yLoc)) {
        xLoc = queue[i][0];
        yLoc = queue[i][1];
        index = i;
      }
    }

    queue.splice(index, 1);

    if (xLoc < tileColumnCount - 1) {
      if (tiles[xLoc+1][yLoc].state == 'f') {
        pathFound = true;
      }
    }
    if (yLoc < tileRowCount - 1) {
      if (tiles[xLoc][yLoc+1].state == 'f') {
        pathFound = true;
      }
    }

    if (xLoc > 0) {
      if (tiles[xLoc-1][yLoc].state == 'e') {
        queue.push([xLoc-1, yLoc]);
        tiles[xLoc-1][yLoc].state = tiles[xLoc][yLoc].state + 'l';
      }
    }
    if (xLoc < tileColumnCount - 1) {
      if (tiles[xLoc+1][yLoc].state == 'e') {
        queue.push([xLoc+1, yLoc]);
        tiles[xLoc+1][yLoc].state = tiles[xLoc][yLoc].state + 'r';
      }
    }
    if (yLoc > 0) {
      if (tiles[xLoc][yLoc-1].state == 'e') {
        queue.push([xLoc, yLoc-1]);
        tiles[xLoc][yLoc-1].state = tiles[xLoc][yLoc].state + 'u';
      }
    }
    if (yLoc < tileRowCount - 1) {
      if (tiles[xLoc][yLoc+1].state == 'e') {
        queue.push([xLoc, yLoc+1]);
        tiles[xLoc][yLoc+1].state = tiles[xLoc][yLoc].state + 'd';
      }
    }

  }

  if (!pathFound) {
    output.innerHTML = 'No possible solution';
  }

  else {
    output.innerHTML = 'Solved!';

    var path = tiles[xLoc][yLoc].state;
    var pathLength = path.length;
    var currX = 0;
    var currY = 0;
    for (var i = 0; i < pathLength-1; i++) {
      if (path.charAt(i+1) == 'u') {
        currY -= 1;
      }
      if (path.charAt(i+1) == 'd') {
        currY += 1;
      }
      if (path.charAt(i+1) == 'r') {
        currX += 1;
      }
      if (path.charAt(i+1) == 'l') {
        currX -= 1;
      }
      tiles[currX][currY].state = 'x';
    }

  }

}

function reset() {
  for (c = 0; c < tileColumnCount; c++) {
    tiles[c] = [];
    for (r = 0; r < tileRowCount; r++) {
      tiles[c][r] = {x: c*(tileW+3), y: r*(tileH+3), state: 'e'}; //state is e for empty
    }
  }
  tiles[0][0].state = 's';
  tiles[tileColumnCount-1][tileRowCount-1].state = 'f';

  output.innerHTML = 'Click the purple squares to build a maze.';
}

function myMove(e) {
  x = e.pageX - canvas2.offsetLeft;
  y = e.pageY - canvas2.offsetTop;
  
  for(c=0; c < tileColumnCount; c++) {
    for(r=0; r < tileRowCount; r++) {
      if (c*(tileW+3) < x && x < c*(tileW+3)+tileW && r*(tileH+3) < y && y < r*(tileH+3)+tileH) {
        if (tiles[c][r].state == "e" && (c != boundX || r != boundY)) {
          tiles[c][r].state = "w";

          boundX = c;
          boundY = r;

        }
        else if (tiles[c][r].state == "w" && (c != boundX || r != boundY)) {
          tiles[c][r].state = "e";

          boundX = c;
          boundY = r;

        }
      }
    }
  }
}

function myUp() {
  canvas2.onmousemove = null;
}

function myDown(e) {

  canvas2.onmousemove = myMove;

  x = e.pageX - canvas2.offsetLeft;
  y = e.pageY - canvas2.offsetTop;

  for(c=0; c < tileColumnCount; c++) {
    for(r=0; r < tileRowCount; r++) {
      if (c*(tileW+3) < x && x < c*(tileW+3)+tileW && r*(tileH+3) < y && y < r*(tileH+3)+tileH) {
        if (tiles[c][r].state == "e") {
          tiles[c][r].state = "w";

          boundX = c;
          boundY = r;

        }
        else if (tiles[c][r].state == "w") {
          tiles[c][r].state = "e";

          boundX = c;
          boundY = r;

        }
      }
    }
  }
}

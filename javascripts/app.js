// Rover Object and Grid Goes Here
// ======================
var rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  name: "R1"
};

var rover2 = {
  direction: "N",
  x: 1,
  y: 0,
  travelLog: [],
  name: "R2"
};

var rover3 = {
  direction: "N",
  x: 2,
  y: 0,
  travelLog: [],
  name: "R3"
};

var marsGrid = [["R1","R2","R3",0,"O",0,0,0,0,0],[0,0,"O",0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,"O"],[0,0,"O",0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,"O",0],[0,0,0,0,0,0,0,0,"O",0],[0,0,0,0,"O",0,0,0,0,0],[0,0,0,0,0,0,0,0,0,"O"],[0,0,0,0,0,0,0,"O",0,0],[0,0,0,0,0,"O",0,0,0,0]];

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "N":
    if (rover.y>0 && marsGrid[rover.y-1][rover.x]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.y--;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved forward!");
      rover.travelLog.push("x: "+rover.x+", y: "+(rover.y+1));
    } else if (rover.y>0 && marsGrid[rover.y-1][rover.x]==="O"){
      console.log("Obstacle!");
    } else if (rover.y>0 && marsGrid[rover.y-1][rover.x]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move forward!");
    }
    break;
    case "E":
    if (rover.x<10 && marsGrid[rover.y][rover.x+1]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.x++;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved forward!");
      rover.travelLog.push("x: "+(rover.x-1)+", y: "+rover.y);
    } else if (rover.x<10 && marsGrid[rover.y][rover.x+1]==="O"){
      console.log("Obstacle!");
    } else if (rover.x<10 && marsGrid[rover.y][rover.x+1]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move forward!");
    }
    break;
    case "S":
    if (rover.y<10 && marsGrid[rover.y+1][rover.x]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.y++;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved forward!");
      rover.travelLog.push("x: "+rover.x+", y: "+(rover.y-1));
    } else if (rover.y<10 && marsGrid[rover.y+1][rover.x]==="O"){
      console.log("Obstacle!");
    } else if (rover.y<10 && marsGrid[rover.y+1][rover.x]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move forward!");
    }
    break;
    case "W":
    if (rover.x>0 && marsGrid[rover.y][rover.x-1]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.x--;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved forward!");
      rover.travelLog.push("x: "+(rover.x+1)+", y: "+rover.y);
    } else if (rover.x>0 && marsGrid[rover.y][rover.x-1]==="O"){
      console.log("Obstacle!");
    } else if (rover.x>0 && marsGrid[rover.y][rover.x-1]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move forward!");
    }
    break;
  }
  console.log("Mars Rover position: "+ rover.x+ ", "+ rover.y);
  console.log(marsGrid);
}

function moveBackwards(rover){
  console.log("moveBackwards was called");
  switch (rover.direction){
    case "N":
    if (rover.y<10 && marsGrid[rover.y+1][rover.x]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.y++;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved backwards!");
      rover.travelLog.push("x: "+rover.x+", y: "+(rover.y-1));
    } else if (rover.y<10 && marsGrid[rover.y+1][rover.x]==="O"){
      console.log("Obstacle!");
    } else if (rover.y<10 && marsGrid[rover.y+1][rover.x]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move backwards!");
    }
    break;
    case "E":
    if (rover.x>0 && marsGrid[rover.y][rover.x-1]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.x--;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved backwards!");
      rover.travelLog.push("x: "+(rover.x+1)+", y: "+rover.y);
    } else if (rover.x>0 && marsGrid[rover.y][rover.x-1]==="O"){
      console.log("Obstacle!");
    } else if (rover.x>0 && marsGrid[rover.y][rover.x-1]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move backwards!");
    }
    break;
    case "S":
    if (rover.y>0 && marsGrid[rover.y-1][rover.x]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.y--;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved Backwards!");
      rover.travelLog.push("x: "+rover.x+", y: "+(rover.y+1));
    } else if (rover.y>0 && marsGrid[rover.y-1][rover.x]==="O"){
      console.log("Obstacle!");
    } else if (rover.y>0 && marsGrid[rover.y-1][rover.x]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move backwards!");
    }
    break;
    case "W":
    if (rover.x<10 && marsGrid[rover.y][rover.x+1]===0){
      marsGrid[rover.y][rover.x]=0;
      rover.x++;
      marsGrid[rover.y][rover.x]=rover.name;
      console.log("Moved backwards!");
      rover.travelLog.push("x: "+(rover.x-1)+", y: "+rover.y);
    } else if (rover.x<10 && marsGrid[rover.y][rover.x+1]==="O"){
      console.log("Obstacle!");
    } else if (rover.x<10 && marsGrid[rover.y][rover.x+1]!=0){
      console.log("Another rover is there!");
    } else {
      console.log("Can't move backwards!");
    }
    break;
  }
  console.log("Mars Rover position: "+ rover.x+ ", "+ rover.y);
  console.log(marsGrid);
}

function commandRover(commands, rover){
  for (var i=0; i<commands.length; i++){
    switch (commands[i]) {
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      default:
        console.log("Unknown command :"+commands[i]);
    }
  }
  console.log(rover.travelLog);
}

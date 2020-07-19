var database; 

var drawing = [];
var currentPath = [];
//var isDrawing = false;

function setup() {
  canvas = createCanvas(500,500);
  canvas.mousePressed(startPath);
  canvas.parent('canvascontainer'); 

  //var saveButton = select('#saveButton');
  //saveButton.mousePressed(saveDrawing);
  var clearButton = select('#clearButton');
  clearButton.mousePressed(clearDrawing);
 // canvas.mouseReleased(endPath);
 /* var config = {
    apiKey: "AIzaSyAL3nLNwWcUmKPVZlNepsEYzAC650BoRsI",
    authDomain: "canvas-part-1-da182.firebaseapp.com",
    databaseURL: "https://canvas-part-1-da182.firebaseio.com",
    storageBucket: "canvas-part-1-da182.appspot.com",
    messagingSenderId: "546026874681",

};
firebase.initializeApp(config);
database = firebase.database();*/

}

function startPath(){
  //isDrawing = true;
 currentPath = [];
 drawing.push(currentPath);
} 

//function endPath(){
  //isDrawing = false;
//}

function draw() {
  background(0);  
 
if(mouseIsPressed){
  var point = {
    x: mouseX,
    y: mouseY
  }
  currentPath.push(point);
}


stroke(220);
strokeWeight(3);
noFill();

for(var i = 0; i < drawing.length; i++){
  var path = drawing[i];
  beginShape();
  for(var j = 0; j < path.length; j++){
  vertex(path[j].x,path[j].y);
  
}
endShape();
}

drawSprites();
}

/*function saveDrawing(){
 var ref = database.ref ('drawings');
  var data = {
    name : "bd",
    drawing: drawing
  }
  ref.push(data);
 
}*/

function clearDrawing(){
  drawing = [];
}
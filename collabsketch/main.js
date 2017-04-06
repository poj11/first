var config = {
    apiKey: "AIzaSyDJ0dhHSiuT3LML4hXZH2pkC0gNz8tKmxQ",
    authDomain: "collaborative-project.firebaseapp.com",
    databaseURL: "https://collaborative-project.firebaseio.com",
    storageBucket: "collaborative-project.appspot.com",
    messagingSenderId: "25305640634"
  };
  firebase.initializeApp(config);
var pointsData = firebase.database().ref();
var points = [];

function setup() {
  var canvas = createCanvas(400, 400);
  background(255);
  fill(0);
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  canvas.mousePressed(drawPoint);
  /*
  canvas.mouseMoved(function () {
    if (mouseIsPressed) {
      drawPoint();
    }
  });
  */
}

function draw() {
  background(255);
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}

function drawPoint() {
  alert("Having trouble there friend?");
  //pointsData.push({x: mouseX, y: mouseY});
  return false;
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
  saveCanvas("Painter Orpheus");
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
  alert("HOW DARE YOU!");
  /*
  pointsData.remove();
  points = [];
  */
}
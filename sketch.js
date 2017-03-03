// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];
var r, g, b;
 
 

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}



function setup() {
  createCanvas(800, 300);
  background(51);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
 
   var myname1 = document.getElementById("myname").value; 
  var points = font.textToPoints(myname1, 100, 200, 192, {
    sampleFactor: 0.25
  });
    console.log(myname1);
    vehicles.length =0; 
    
    

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
 
}
  r = random(255);
  g = random(255);
  b = random(255);

}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  
  }
}

let programs = [
  {
    'definition' : 'Ball moving in straight line',
    'setupFunction' : setupPiece1,
    'drawFunction' : drawPiece1
  },
  {
    'definition' : 'Ball moving in straight line leaving a solid trail',
    'setupFunction' : setupPiece2,
    'drawFunction' : drawPiece2
  },
  {
    'definition' : 'Ball moving in straight line leaving a translucent trail',
    'setupFunction' : setupPiece3,
    'drawFunction' : drawPiece3
  },
  {
    'definition' : 'Ball moving in sine wave line leaving a translucent trail',
    'setupFunction' : setupPiece4,
    'drawFunction' : drawPiece4
  },
  {
    'definition' : 'Ball moving in sine wave and size varying',
    'setupFunction' : setupPiece5,
    'drawFunction' : drawPiece5
  },
  {
    'definition' : 'Sine wave with varying phases',
    'setupFunction' : setupPiece6,
    'drawFunction' : drawPiece6
  },
  {
    'definition' : 'Lines with varying random thickness',
    'setupFunction' : setupPiece7,
    'drawFunction' : drawPiece7
  }
]

function preload() {
  // debugger;
  getColours();
}

let colours;
function setup() {
  angleMode(DEGREES);
  createCanvas(window.innerWidth, programs.length*pieceHeight);
  // debugger;
  for(let i=0; i<programs.length;i++) {
    colours = COLOURS[i%COLOURS.length];
    setupSubcanvas(0,pieceHeight*i,programs[i].setupFunction);
  }
  
}

function draw() {
  for(let i=0; i<programs.length;i++) {
    colours = COLOURS[i%COLOURS.length];
    drawSubcanvas(0,pieceHeight*i,programs[i].drawFunction);
  }
}

function setupSubcanvas(x, y, setupFn) {
  push();
  translate(x, y);
  setupFn();
  pop();
} 

function drawSubcanvas(x, y, drawFn) {
  push();
  translate(x, y);
  drawFn();
  pop();
}


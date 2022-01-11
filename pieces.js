let pieceWidth = window.innerWidth;
let pieceHeight = 300;

/*NOTE 
to use any of these codes stand alone, do the following
replace:
setupPiecex --> setup
drawPiecex --> draw
createCanvasPiece --> createCanvas
backgroundPiece --> background
pieceWidth --> width
pieceHeight --> height

tldr: find the word piece and Piece and delete it.

make sure to include colours.js as the colour palettes are from there
you can prefill the colours array with any item from the COLOURS 2D array
*/

// PROGRAM 1 - ball moving in straight line  
function setupPiece1() {
    createCanvasPiece(window.innerWidth, pieceHeight);
    backgroundPiece(colours[0]);
}

function drawPiece1() {
    noStroke();
    backgroundPiece(colours[0]);
    fill(colours[1]);
    ellipse(frameCount%width, pieceHeight/2, 60,60);
}


// PROGRAM 2 - ball moving in straight line leaving a solid trail
function setupPiece2() {
    createCanvasPiece(window.innerWidth, pieceHeight);
    backgroundPiece(colours[0]);
}

function drawPiece2() {
    noStroke();
    fill(colours[1]);
    ellipse(frameCount%pieceWidth, pieceHeight/2, 40,40);
}

// PROGRAM 3 - ball moving in straight line leaving a translucent trail
function setupPiece3() {
    createCanvasPiece(window.innerWidth, pieceHeight);
    backgroundPiece(colours[0]);
}

function drawPiece3() {
    noStroke();
    backgroundPiece(colours[0]+"22");
    fill(colours[1]);
    ellipse(frameCount%pieceWidth, pieceHeight/2, 40,40);
}

// PROGRAM 4 - ball moving in sine wave line leaving a translucent trail
function setupPiece4() {
    createCanvasPiece(window.innerWidth, pieceHeight);
    backgroundPiece(colours[2]);
}

function drawPiece4() {
    noStroke();
    backgroundPiece(colours[2]+"22");
    fill(colours[3]);
    ellipse(frameCount%pieceWidth, pieceHeight/2 + 40*sin(frameCount/20), 40,40);
}

// PROGRAM 5 - ball moving in sine wave and size varying
function setupPiece5() {
    createCanvasPiece(window.innerWidth, pieceHeight);
    backgroundPiece(colours[1]);
}

function drawPiece5() {
    noStroke();
    // backgroundPiece(colours[2]+"22");
    fill(colours[2]);
    stroke(colours[1]);
    ellipse(frameCount*2%pieceWidth, pieceHeight/2 + 40*sin(frameCount*2),abs(40*sin(frameCount*2)));
}

// PROGRAM 6 - Moving sine wave - phase shift
function setupPiece6() {
    createCanvasPiece(window.innerWidth, pieceHeight);
    backgroundPiece(colours[0]);
}

function drawPiece6() {
    backgroundPiece(colours[0]);
    stroke(colours[3]);
    fill(colours[3]);
    for(let i=0;i<pieceWidth; i+=5) {
        ellipse(i, pieceHeight/2 + 40*sin(frameCount+ i*2),5);
    }
    
}

// PROGRAM 7 - random lines
function setupPiece7() {
    createCanvasPiece(window.innerWidth, pieceHeight);
    backgroundPiece(colours[0]);
    for(let j =0,i=0;j<pieceHeight;j+=30,i++) {
        stroke(colours[i%4+1]);
        strokeWeight(random(2,15));
        line(0,j,pieceWidth,j);
    }
}

function drawPiece7() {
    
    if(frameCount%10==0) {
        backgroundPiece(colours[0]);
        for(let j =0,i=0;j<pieceHeight;j+=30,i++) {
            stroke(colours[i%4+1]);
            strokeWeight(random(5,15));
            line(0,j+20,pieceWidth,j+20);
        }
    }
    
}


//UTIL
function createCanvasPiece(w,h) {
    rect(0,0,w,h);
}

function backgroundPiece(c) {
    fill(c);
    stroke(c);
    rect(0,0,pieceWidth, pieceHeight);
}


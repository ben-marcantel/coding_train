var img;
function preload() {
    console.log("yo");
    img = loadImage('./images/skull.svg');
}

function setup() {
    background(255);
    createCanvas(1000, 1000);
}

function draw() {
    image(img, 0, 0);
}
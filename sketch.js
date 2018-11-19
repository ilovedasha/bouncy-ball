let icon, radius, bounce;
let balls = [];

function preload() {
    icon = loadImage("assets/ball.png");
    bounce = loadSound("assets/bounce.wav");
}

function setup() {
    createCanvas(windowWidth, 500);
    imageMode(CENTER);
    radius = createSlider(20, 80, 50, 1);
    radius.position(0, 0);
}

function draw() {
    background(51);
    for (let ball of balls) {
        ball.show();
        ball.update();
    }
}

function mousePressed() {
    balls.push(new Ball(mouseX, mouseY));
}

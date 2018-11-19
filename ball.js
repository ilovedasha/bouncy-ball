const GRAVITY = 1;
const WIND = 5;
const TRACTION = 0.95;


class Ball {

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(WIND, 0);
        this.angle = 0;
    }

    show() {
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        let d = 2*radius.value();
        image(icon, 0, 0, d, d);
        resetMatrix();
    }

    update() {
        let acc = createVector(0, GRAVITY);
        let r = radius.value();
        this.vel.add(acc);
        this.pos.add(this.vel);
        this.angle += 5/r;
        if (this.pos.x > width+r)
            this.pos.x = -r;
        if (this.pos.y > height-r) {
            if (this.vel.y > 2)
                bounce.play();
            this.pos.y = height-r;
            this.vel.y *= -TRACTION;
        }
    }
}

export default class Projectile {
    x: number;
    y: number;
    speed: number;
    direction: number;

    constructor(x: number, y: number, speed: number, direction: number) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
    }

    update(delta: number) {
        this.x += this.speed * Math.cos(this.direction) * delta;
        this.y += this.speed * Math.sin(this.direction) * delta;
    }
}
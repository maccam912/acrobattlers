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
        this.x += Math.cos(this.direction) * this.speed * delta;
        this.y += Math.sin(this.direction) * this.speed * delta;
    }
}
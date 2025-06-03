export class Player {
    constructor(public id: string, public x: number, public y: number, public health: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.health = health;
    }

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }

    takeDamage(amount: number) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    isAlive() {
        return this.health > 0;
    }
}


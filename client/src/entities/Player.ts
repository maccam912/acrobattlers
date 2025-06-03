export default class Player {
  position: { x: number; y: number };
  health: number;

  constructor(x: number, y: number) {
    this.position = { x, y };
    this.health = 100; // Default health
  }

  move(dx: number, dy: number) {
    this.position.x += dx;
    this.position.y += dy;
  }

  takeDamage(amount: number) {
    this.health -= amount;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  isAlive(): boolean {
    return this.health > 0;
  }
}

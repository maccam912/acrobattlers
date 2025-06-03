import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    // Load assets here
    this.load.image('player', 'assets/sprites/player.png');
    this.load.image('projectile', 'assets/sprites/projectile.png');
    // Add more assets as needed
  }

  create() {
    this.scene.start('MenuScene');
  }
}

import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    // Load any assets needed for the menu here
  }

  create() {
    this.add.text(100, 100, 'Acrobattlers', { fontSize: '32px', fill: '#fff' });
    const startButton = this.add
      .text(100, 200, 'Start Game', { fontSize: '24px', fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => this.startGame());

    const instructionsButton = this.add
      .text(100, 250, 'Instructions', { fontSize: '24px', fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => this.showInstructions());
  }

  startGame() {
    this.scene.start('PreloadScene');
  }

  showInstructions() {
    // Logic to show instructions
  }
}

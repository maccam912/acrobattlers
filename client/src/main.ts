import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MenuScene from './scenes/MenuScene';
import PreloadScene from './scenes/PreloadScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [PreloadScene, MenuScene, GameScene],
};

const game = new Phaser.Game(config);

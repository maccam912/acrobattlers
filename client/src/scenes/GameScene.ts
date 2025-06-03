import Phaser from 'phaser';
import Player from '../entities/Player';
import Projectile from '../entities/Projectile';

export default class GameScene extends Phaser.Scene {
    private players: Player[];
    private projectiles: Projectile[];

    constructor() {
        super({ key: 'GameScene' });
        this.players = [];
        this.projectiles = [];
    }

    preload() {
        // Load assets here
        this.load.image('player', 'assets/sprites/player.png');
        this.load.image('projectile', 'assets/sprites/projectile.png');
    }

    create() {
        // Create game environment
        this.add.text(20, 20, 'Acrobattlers', { font: '25px Arial', fill: '#ffffff' });

        // Initialize players and projectiles
        this.players.push(new Player(this, 100, 100));
        this.projectiles.push(new Projectile(this, 200, 200));
    }

    update(time: number, delta: number) {
        // Update game logic
        this.players.forEach(player => player.update(time, delta));
        this.projectiles.forEach(projectile => projectile.update(time, delta));
    }

    handlePlayerInput() {
        // Handle player input for movement and actions
    }
}
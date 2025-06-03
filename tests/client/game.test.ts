import { describe, it, expect } from 'vitest';
import Player from '../../client/src/entities/Player';

describe('Player', () => {
    it('should initialize with correct position and health', () => {
        const player = new Player(100, 200);
        expect(player.position.x).toBe(100);
        expect(player.position.y).toBe(200);
        expect(player.health).toBe(100);
    });

    it('should move correctly', () => {
        const player = new Player(100, 200);
        player.move(10, -5);
        expect(player.position.x).toBe(110);
        expect(player.position.y).toBe(195);
    });

    it('should take damage correctly', () => {
        const player = new Player(100, 200);
        player.takeDamage(30);
        expect(player.health).toBe(70);
        expect(player.isAlive()).toBe(true);
    });

    it('should die when health reaches zero', () => {
        const player = new Player(100, 200);
        player.takeDamage(100);
        expect(player.health).toBe(0);
        expect(player.isAlive()).toBe(false);
    });

    it('should not have negative health', () => {
        const player = new Player(100, 200);
        player.takeDamage(150);
        expect(player.health).toBe(0);
        expect(player.isAlive()).toBe(false);
    });
});
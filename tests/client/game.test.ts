import { describe, it, expect } from 'vitest';
import { GameClient } from '../../src/network/GameClient';
import { Player } from '../../src/entities/Player';

describe('GameClient', () => {
    it('should connect to the server', async () => {
        const client = new GameClient();
        await client.connect();
        expect(client.isConnected()).toBe(true);
    });

    it('should send player data to the server', async () => {
        const client = new GameClient();
        await client.connect();
        const player = new Player(0, 0);
        client.sendPlayerData(player);
        expect(client.getLastSentData()).toEqual(player);
    });
});

describe('Player', () => {
    it('should initialize with correct position and health', () => {
        const player = new Player(100, 200);
        expect(player.x).toBe(100);
        expect(player.y).toBe(200);
        expect(player.health).toBe(100); // Assuming default health is 100
    });

    it('should move correctly', () => {
        const player = new Player(100, 200);
        player.move(10, -5);
        expect(player.x).toBe(110);
        expect(player.y).toBe(195);
    });
});
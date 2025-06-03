import { describe, it, expect, beforeEach } from 'vitest';
import { GameState, PlayerState } from '../../shared/src/schemas/GameState';

describe('GameState', () => {
  let gameState: GameState;

  beforeEach(() => {
    gameState = new GameState();
  });

  it('should initialize with empty players map', () => {
    expect(gameState.players.size).toBe(0);
    expect(gameState.time).toBe(0);
  });

  it('should allow adding players', () => {
    const player = new PlayerState();
    player.id = 'player1';
    player.x = 100;
    player.y = 200;
    player.health = 100;
    player.score = 0;

    gameState.players.set('player1', player);

    expect(gameState.players.size).toBe(1);
    expect(gameState.players.get('player1')?.id).toBe('player1');
    expect(gameState.players.get('player1')?.x).toBe(100);
    expect(gameState.players.get('player1')?.y).toBe(200);
  });

  it('should allow removing players', () => {
    const player = new PlayerState();
    player.id = 'player1';
    gameState.players.set('player1', player);

    expect(gameState.players.size).toBe(1);

    gameState.players.delete('player1');
    expect(gameState.players.size).toBe(0);
  });
});

describe('PlayerState', () => {
  let player: PlayerState;

  beforeEach(() => {
    player = new PlayerState();
  });

  it('should initialize with default values', () => {
    expect(player.id).toBe('');
    expect(player.x).toBe(0);
    expect(player.y).toBe(0);
    expect(player.health).toBe(100);
    expect(player.score).toBe(0);
  });

  it('should allow setting values', () => {
    player.id = 'test-player';
    player.x = 150;
    player.y = 250;
    player.health = 75;
    player.score = 100;

    expect(player.id).toBe('test-player');
    expect(player.x).toBe(150);
    expect(player.y).toBe(250);
    expect(player.health).toBe(75);
    expect(player.score).toBe(100);
  });
});

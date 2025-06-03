import { Room, Client } from 'colyseus';
import { GameState, PlayerState } from '../../../shared/src/schemas/GameState';

export class GameRoom extends Room<GameState> {
  onCreate(_options: unknown) {
    this.setState(new GameState());

    this.onMessage('move', (client: Client, data: { direction: string }) => {
      const player = this.state.players.get(client.sessionId);
      if (player) {
        // Simple movement logic
        if (data.direction === 'left') player.x -= 5;
        if (data.direction === 'right') player.x += 5;
        if (data.direction === 'up') player.y -= 5;
        if (data.direction === 'down') player.y += 5;
      }
    });

    this.onMessage('shoot', (client: Client) => {
      const player = this.state.players.get(client.sessionId);
      if (player) {
        // Simple shooting logic - could be expanded
        console.log(`Player ${client.sessionId} is shooting!`);
      }
    });
  }

  onJoin(client: Client) {
    const player = new PlayerState();
    player.id = client.sessionId;
    player.x = Math.random() * 800; // Random starting position
    player.y = Math.random() * 600;
    player.health = 100;
    player.score = 0;

    this.state.players.set(client.sessionId, player);
    console.log(`Player ${client.sessionId} joined`);
  }

  onLeave(client: Client) {
    this.state.players.delete(client.sessionId);
    console.log(`Player ${client.sessionId} left`);
  }

  onDispose() {
    // Cleanup logic if necessary
  }
}

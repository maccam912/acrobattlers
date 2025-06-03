import { Server } from 'colyseus';
import { createServer } from 'http';
import { GameRoom } from './rooms/GameRoom';

const PORT = process.env.PORT || 2567;

const server = new Server({
  server: createServer(),
});

server.define('game', GameRoom);

server.listen(PORT, () => {
  console.log(`Server is running on ws://localhost:${PORT}`);
});

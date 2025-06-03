export interface PlayerData {
  id: string;
  position: { x: number; y: number };
  health: number;
}

export interface GameState {
  players: PlayerData[];
  projectiles: { id: string; position: { x: number; y: number }; speed: number }[];
}

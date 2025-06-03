import { Schema, MapSchema, type } from "@colyseus/schema";

export class PlayerState extends Schema {
    @type("string") id: string = "";
    @type("number") x: number = 0;
    @type("number") y: number = 0;
    @type("number") health: number = 100;
    @type("number") score: number = 0;
}

export class ProjectileState extends Schema {
    @type("string") id: string = "";
    @type("number") x: number = 0;
    @type("number") y: number = 0;
    @type("number") velocityX: number = 0;
    @type("number") velocityY: number = 0;
}

export class GameState extends Schema {
    @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
    @type({ map: ProjectileState }) projectiles = new MapSchema<ProjectileState>();
    @type("number") time: number = 0;
}
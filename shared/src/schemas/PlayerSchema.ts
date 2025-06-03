import { Schema, type, MapSchema, ArraySchema } from '@colyseus/schema';

export class PlayerSchema extends Schema {
    @type("string") id: string;
    @type("number") x: number;
    @type("number") y: number;
    @type("number") health: number;
    @type("number") score: number;

    constructor(id: string) {
        super();
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.health = 100;
        this.score = 0;
    }
}
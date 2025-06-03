import { Room, Client } from "colyseus";
import { GameState } from "../../shared/src/schemas/GameState";
import { Player } from "../entities/Player";

describe("GameRoom", () => {
    let room: Room;
    let client: Client;

    beforeEach(async () => {
        // Setup the room and client before each test
        room = new Room();
        client = new Client();
        await room.onCreate();
    });

    afterEach(async () => {
        // Cleanup after each test
        await room.onDispose();
    });

    it("should initialize with a default game state", () => {
        expect(room.state).toBeInstanceOf(GameState);
    });

    it("should add a player when a client joins", async () => {
        await room.onJoin(client);
        expect(room.state.players.length).toBe(1);
    });

    it("should remove a player when a client leaves", async () => {
        await room.onJoin(client);
        await room.onLeave(client);
        expect(room.state.players.length).toBe(0);
    });

    it("should update player state correctly", async () => {
        await room.onJoin(client);
        const player = room.state.players[0];
        player.position.x = 100;
        player.position.y = 200;
        room.state.players[0] = player;

        expect(room.state.players[0].position.x).toBe(100);
        expect(room.state.players[0].position.y).toBe(200);
    });
});
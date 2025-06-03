export default class GameClient {
    private room: any;
    private client: any;

    constructor() {
        this.client = new Colyseus.Client('ws://localhost:2567'); // Adjust the URL as needed
    }

    public async joinRoom(roomName: string) {
        this.room = await this.client.join(roomName);
        this.room.onStateChange((state) => {
            console.log("New state:", state);
        });
        this.room.onMessage("message", (message) => {
            console.log("Received message:", message);
        });
    }

    public sendMessage(message: any) {
        if (this.room) {
            this.room.send("message", message);
        }
    }

    public leaveRoom() {
        if (this.room) {
            this.room.leave();
            this.room = null;
        }
    }
}
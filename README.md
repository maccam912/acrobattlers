# Acrobattlers

Acrobattlers is a multiplayer platforming game inspired by Worms, where players control acrobatic characters in a dynamic environment. The game features various scenes, player interactions, and a server-client architecture using Colyseus for real-time multiplayer functionality.

## Project Structure

```
acrobattlers
├── client                # Client-side application
│   ├── src               # Source files for the client
│   ├── public            # Public assets
│   ├── index.html        # Main HTML file
│   ├── vite.config.ts    # Vite configuration
│   └── tsconfig.json     # TypeScript configuration for client
├── server                # Server-side application
│   ├── src               # Source files for the server
│   └── tsconfig.json     # TypeScript configuration for server
├── shared                # Shared code between client and server
│   └── tsconfig.json     # TypeScript configuration for shared code
├── tests                 # Test files for client and server
├── package.json          # Bun configuration
├── bun.lockb            # Bun lock file
├── vitest.config.ts      # Vitest configuration
└── tsconfig.json         # TypeScript configuration for the entire project
```

## Getting Started

### Prerequisites

- Install [Bun](https://bun.sh/) for package management.
- Install [Node.js](https://nodejs.org/) if not already installed.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/acrobattlers.git
   cd acrobattlers
   ```

2. Install dependencies:
   ```
   bun install
   ```

### Running the Game

1. Start the server:
   ```
   bun run server
   ```

2. Start the client:
   ```
   bun run client
   ```

3. Open your browser and navigate to `http://localhost:3000` to play the game.

### Testing

To run tests, use the following command:
```
bun test
```

### Gameplay

In Acrobattlers, players take control of unique characters and engage in acrobatic battles across various platforms. Utilize your environment, dodge projectiles, and outmaneuver your opponents to claim victory!

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
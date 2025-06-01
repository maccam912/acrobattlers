#!/usr/bin/env -S deno run -A

/**
 * Development server for the Acrobattlers project
 */
async function main() {
  console.log("Starting development server for Acrobattlers...");

  // This is a placeholder. In a real setup, you might import and use Vite directly.
  // For now, use the Deno subprocess API to run the vite command
  const process = new Deno.Command("vite", {
    args: ["dev"],
    stdout: "inherit",
    stderr: "inherit",
  });

  const { code } = await process.output();
  Deno.exit(code);
}

if (import.meta.main) {
  await main();
}

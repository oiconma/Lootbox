import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x9d00aE733f8438996dD0dF64907e6Bcd2041A664';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x0EdeAe7f10314e8A6FAD2132889E08DaF79F1046");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "DAPPs and DAOs Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "DDL",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
//0xc56693AC133d4f5890A90dB3Aa64EaD2C5296cDd

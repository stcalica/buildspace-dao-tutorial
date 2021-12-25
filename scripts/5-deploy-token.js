import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x4D517976aAC0fFAf235dA04FdA42F7C2a62840C6");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "Adhd Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "ADHD",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
//0x217a70f4c913F49E865FE3D583Dc974802cdC71b

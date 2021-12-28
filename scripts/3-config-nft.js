import thirdsdk from "./1-initialize-sdk.js"

import { readFileSync } from "fs";

const bundleDrop = thirdsdk.getBundleDropModule(
  "0xF5e792349b481E8D79F0a6f06aB4540c0ac4bD6F",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "DApp and DAOs Token",
        description: "This NFT will give you access to DAO!",
        image: readFileSync("scripts/assets/dapp-dao-membership-token.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
//

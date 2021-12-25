import thirdsdk from "./1-initialize-sdk.js"

import { readFileSync } from "fs";

const bundleDrop = thirdsdk.getBundleDropModule(
  "0x94f9f891D981F60bc5dc6fbe491Ca4d3FC540855",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "ADHD Token",
        description: "This NFT will give you access to AdhdDAO!",
        image: readFileSync("scripts/assets/adhd_membership_token.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
//0x4D517976aAC0fFAf235dA04FdA42F7C2a62840C6

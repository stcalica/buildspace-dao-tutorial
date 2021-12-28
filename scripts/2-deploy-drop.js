import { ethers } from "ethers";
import thirdsdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = thirdsdk.getAppModule("0x0EdeAe7f10314e8A6FAD2132889E08DaF79F1046");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "First Membership",
      // A description for the collection.
      description: "A DAO for learning about DApps and DAOs",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/dao-dapp-nft-noun-project.jpg"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})();
//0xF5e792349b481E8D79F0a6f06aB4540c0ac4bD6F

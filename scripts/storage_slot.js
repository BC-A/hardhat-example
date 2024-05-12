// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
    const storage = await hre.ethers.deployContract("Storage");
    console.log('Deploying storage contact...');
    storage.waitForDeployment();

    let key = 1
    let value = 10
    await storage.connect(owner).set(key, value);

    let getValue = await storage.connect(owner).get(1);
    console.log("value: ", getValue);

    let address = await storage.getAddress()

    let slotP = 0
    let abi = ethers.AbiCoder.defaultAbiCoder()
    // uint256 and uint256 are mapping uint256 => uint256
    let abiCode = abi.encode(["uint256", "uint256"], [key, slotP])
    let slotId = ethers.keccak256(abiCode)
    // 0xada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d
    console.log("slotId: ", slotId)
    const slot = await network.provider.send("eth_getStorageAt", [
        address, slotId
      ]);

    console.log("slot: ", slot)

    let newValue = "0x0000000000000000000000000000000000000000000000000000000000000001"
    await network.provider.send("hardhat_setStorageAt", [
        address, slotId, newValue
      ]);
    
    let getNewValue = await storage.connect(owner).get(1);
    console.log("newValue: ", getNewValue);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

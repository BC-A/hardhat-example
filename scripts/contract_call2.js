// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const ownerAddress = await owner.address
  const bank = await hre.ethers.deployContract("Bank");
  console.log('Deploying Bank contact...');
  bank.waitForDeployment();

  const mtk = await hre.ethers.deployContract("MyToken");
  console.log('Deploying Mytoken contact...');
  mtk.waitForDeployment();
  let tokenAddress = await mtk.getAddress();
  console.log('Book contract address: ', tokenAddress);

  await bank.connect(owner).get(tokenAddress, 1000);
  
  let value = await bank.connect(owner).retrieve(tokenAddress);
  console.log("value: ", value);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

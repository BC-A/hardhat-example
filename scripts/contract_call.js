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
  const box = await hre.ethers.deployContract("Box");
  console.log('Deploying Box contact...');
  box.waitForDeployment();

  const book = await hre.ethers.deployContract("Book");
  console.log('Deploying Book contact...');
  book.waitForDeployment();
  let bookAddress = await book.getAddress();
  console.log('Book contract address: ', bookAddress);

  await box.connect(owner).store(bookAddress, 1000);
  
  let value = await box.connect(owner).retrieve(bookAddress);
  console.log("value: ", value);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

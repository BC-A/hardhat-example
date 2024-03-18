const { utils } = require('ethers');
const { ethers } = require('hardhat');
async function main() {
  let provider = hre.network.provider
  let rpc = new ethers.JsonRpcProvider("http://localhost:8545")
  const [owner, signer] = await ethers.getSigners();
  const ownerAddress = await owner.address
  const signerAddress = await signer.address
  // let block = await rpc.getBlock(4)
  // console.log("block: ", block)

  // const txCount = await rpc.getTransactionCount(
  //   "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
  //   3
  // );
  // console.log("txCount: ", txCount);

  const txCount = await provider.send("eth_getTransactionCount", [
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
  ])

  // await owner.sendTransaction({to: signerAddress, value: 1000000000000, gasPrice: 100000, gas: 1000})
  // await owner.sendTransaction({to: signerAddress, value: 1000000000000, gasPrice: 100000, gas: 1000})
  // await signer.sendTransaction({to: ownerAddress, value: 1000000000000, gasPrice: 100000, gas: 1000})
  //await provider.send("eth_sendTransaction", [{
  //  from: ownerAddress, 
  //  to: signerAddress, 
  //  gas: "0x12340", 
  //  value: "0x1234"
  //}])

  await provider.send("eth_sendTransaction", [{
    from: ownerAddress, 
    to: signerAddress, 
    gas: "0x12340", 
    value: "0x1234"
  }])

  console.log("owner balance: ",await provider.send("eth_getBalance", [ownerAddress]))
  console.log("signer balance: ",await provider.send("eth_getBalance", [signerAddress]))
  const pendingTxs = await hre.network.provider.send("eth_pendingTransactions", [
    "pending",
    false,
  ]);
  console.log("pendingTxs length: ", pendingTxs)
  console.log("pendingTxs length: ", pendingTxs.length)
  if(pendingTxs.length >= 1){
    //await provider.send("evm_setAutomine", [true]);
    await provider.send("evm_mine");
  }
  // console.log('MyNFT deployed to:', await myMFT.getAddress());
  // console.log('MyNFT deployed to:', await factory.getAddress());
  // console.log('MyToken deployed to:', await myToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

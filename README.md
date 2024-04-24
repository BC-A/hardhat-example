# Deploy contracts using hardhat

Run the hardhat node on port 8545
```shell
npx hardhat node --port 8545
```

Deploy the contract and execute the function mint in the contract

```shell
npx hardhat run scripts/deploy.js --network localhost
```


Deploy contracts Box and Book, and Box will make function calls based on the address of the Book contract function.

```shell
npx hardhat run scripts/contract_call.js --network localhost
```

# Deploy contracts using forge

Deploy Box contract
```shell
forge create --rpc-url http://localhost:8546 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 contracts/Box.sol:Box
```

Deploy Book contract
```shell
forge create --rpc-url http://localhost:8546 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 contracts/Book.sol:Book
```

Call the store function in the Box contract, 0x32FcBc51dC71b5A47cD6a7124f432102e2f07334 is the address of the Box contract, 0x6B3920Ed4594BB8c99CeCa979971E93f1F39B6E3 is the address of the Book contract.
```shell
cast send --rpc-url http://localhost:8546 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0x32FcBc51dC71b5A47cD6a7124f432102e2f07334 "store(address,uint256)" 0x6B3920Ed4594BB8c99CeCa979971E93f1F39B6E3 1
```
If the status in the output result is 1, it means that the transaction was successfully executed.

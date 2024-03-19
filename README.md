# Examples

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

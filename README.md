# Examples

Run the hardhat node
```shell
npx hardhat node
```

Deploy the contract and execute the function mint in the contract

```shell
npx hardhat run scripts/deploy.js --network localhost
```


Deploy contracts Box and Book, and Box will make function calls based on the address of the Book contract function.

```shell
npx hardhat run scripts/contract_call.js --network localhost
```
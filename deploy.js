import HDWalletProvider from "@truffle/hdwallet-provider";

import Web3 from "web3";
import contract from "./compile.cjs";

const provider = new HDWalletProvider(
  "piece gallery visit tunnel fish husband menu exotic ten also actor crazy",
  "https://goerli.infura.io/v3/ee9d0b8a7f4f4d6bb38879109c27ead4"
);

const web3 = new Web3(provider);

const accounts = await web3.eth.getAccounts();

console.log("Attemting to deplot from ", accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(contract.interface))
  .deploy({
    data: contract.bytecode,
  })
  .send({ gas: "1000000", from: accounts[0] });
console.log(contract.interface);
console.log("Deployed", result.options.address);
provider.engine.stop();

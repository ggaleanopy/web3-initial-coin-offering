const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WORLD_CUP_BALLS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the World Cup Balls NFT contract that you deployed in the previous module
  const worldCupBallsNFTContract = WORLD_CUP_BALLS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so worldCupBallsNFTContract here is a factory for instances of our WCBCoinToken contract.
    */
  const worldCupBallsCoinTokenContract = await ethers.getContractFactory(
    "WCBCoinToken"
  );

  // deploy the contract
  const deployedWorldCupBallsCoinTokenContract = await worldCupBallsCoinTokenContract.deploy(
    worldCupBallsNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "World Cup Balls Coin Token Contract Address:",
    deployedWorldCupBallsCoinTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
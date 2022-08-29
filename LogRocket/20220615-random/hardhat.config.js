require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/fDRhluE_FrCRRKzNh5ykKdr5NkvmOq9n",
       accounts: ["38c85db3a121c019f13687bd79f50517795159e8bb0ab405f7d4e643c9aeed40"]
    }
  }

};

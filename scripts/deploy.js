// imports
// async main
// main

const { ethers, network } = require("hardhat");

async function main() {
    const simpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    ); // THIS WILL GRAB THE SimpleStorage CONTRACT.

    console.log("Deploying Contract...");
    const simpleStorage = await simpleStorageFactory.deploy(); // THIS WILL DEPLOY OUR SimpleStorageFactory CONTRACT.
    await simpleStorage.waitForDeployment(); // THIS WILL WAIT FOR THE DEPLOYMENT TO FINISH.
    console.log(
        `SimpleStorage deployed to: ${simpleStorage.target}` // THIS WILL LOG THE ADDRESS OF THE DEPLOYED CONTRACT.
    );

    // console.log(network.config) // THIS WILL LOG THE NETWORK CONFIGURATION OF THE DEPLOYED CONTRACT.

    /*
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6); // THIS WILL WAIT FOR 6 BLOCK CONFIRMATIONS.
        await verify(simpleStorage.target, []); // THIS WILL VERIFY OUR CONTRACT ON ETHERSCAN.
    } // IF YOU ARE DEPLOYING TO MAINNET OR TESTNET, YOU CAN UNCOMMENT THE ABOVE LINE AND ADD YOUR ETHERSCAN API KEY TO YOUR .env FILE.
    */
   
    const currentFavoriteNumber = await simpleStorage.retrieve(); // THIS WILL RETRIEVE THE CURRENT FAVORITE NUMBER FROM THE CONTRACT.
    console.log(`Current Favorite Number: ${currentFavoriteNumber}`); // THIS WILL LOG THE CURRENT FAVORITE NUMBER.

    // UPDATE THE CURRENT FAVORITE NUMBER.
    const transactionResponse = await simpleStorage.store(7); // THIS WILL STORE THE NEW FAVORITE NUMBER IN THE CONTRACT.
    await transactionResponse.wait(1); // THIS WILL WAIT FOR 1 BLOCK CONFIRMATION.
    const updatedFavoriteNumber = await simpleStorage.retrieve(); // THIS WILL RETRIEVE THE UPDATED FAVORITE NUMBER FROM THE CONTRACT.
    console.log(`Updated Favorite Number: ${updatedFavoriteNumber}`); // THIS WILL LOG THE UPDATED FAVORITE NUMBER.


}

// FUNCTION TO VERIFY OUR TRANSACTION ON ETHERSCAN(USE THIS WHEN YOU ARE DEPLOYING TO mainnet).
async function verify(contractAddress, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(e);
        }
    }
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});
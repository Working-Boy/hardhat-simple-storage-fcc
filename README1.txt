TO SET-UP OUR hardhat PROJECT, DO THE FFG:
1...   yarn init 
AND KEEP CLICKING ON THE Enter button unless you want to set the values(e.g name, version, description, Author and so on)
AND NOW OUR FIRST file is DISPLAYED WHICH IS package.json WHICH CONTAINS THE DETAILS BEING FILLED AND IF NOT THE DEFAULT IS BEING DISPLAYED.
2...   yarn add --dev hardhat
3...   yarn hardhat and then choose Create a JavaScript/TypeScript/TypeScript with Viem and also click on enter and also yes(y) or no(n)
ONLY THE ONE BELOW SHOULD BE no(n), LET THE REST BE y.
Help us improve Hardhat with anonymous crash reports & basic usage data? (Y/n) · n
4...   yarn hardhat compile

--- AND WITH THE ABOVE, WE CAN OUR COMPLETE hardhat BOILERPLATE PROJECT.

---- TO LIST ALL AVAILABLE ACCOUNTS IN YOUR HARDHAT ENVIRONMENT -----
1. Create a scripts folder inside your project directory:
mkdir scripts
2. Create a new file inside the scripts/ folder. Let's call it accounts.js.
touch scripts/accounts.js
3. Edit the accounts.js file to list the accounts. You can open the file and add the following code:
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deployer address:", deployer.address);

    const accounts = await ethers.getSigners();
    console.log("All accounts:");
    accounts.forEach((account, index) => {
        console.log(`${index + 1}: ${account.address}`);
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
4. Run the script to see the accounts:
npx hardhat run scripts/accounts.js

Once done, this script WILL list all the available accounts in your Hardhat environment. Let me know if you need any more help!

NOTE: yarn = npm = npx    SO USE ANYONE YOU FEEL WANT TO.
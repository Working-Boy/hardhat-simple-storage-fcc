WRITE AND INTERACT WITH OUR SMART CONTRACT USING hardhat:

WRITE ALL YOUR contract CODE INSIDE THE contracts FOLDER
RENAME Lock.sol(ALWAYS MAKE SURE THE .sol IS THERE) to WHATEVER YOU LIKE e.g SimpleStorage.sol


AFTER WRITING YOUR CODE AND THEN RUN:
yarn hardhat compile
THEN GO TO artifacts and thenyou will see a file created with the name(name_of_your_file_before_compiling.js) and if you open the file, you will see 2 .json files there.
AND NOW, WE WILL WRITE OUR .deploy script
CODE YOUR .deploy script INSIDE THE scripts FOLDER.
YOU CAN RENAME THE accounts.js file in the scripts FOLDER TO deploy.js AND THEN CLEAR ALL THE CODE in it and WRITE YOUR deploy CODE

yarn hardhat node  // RUN THIS TO VIEW DEFAULT hardhat DIFFERENT ACCOUNTS AND THEIR PRIVATE KEYS

// yarn hardhat run scripts/deploy.js   // TO DEPLOY THE CONTRACT WITH GANACHE DEFAULT(IN-BUILT) NETWORK.
// yarn hardhat run scripts/deploy.js --network ganache    // TO DEPLOY THE CONTRACT WITH A SPECIFIC NETWORK(ganache) AND IT SETUP CAN BE FOUND IN hardhat.config.js FILE.

8:50:00 to 9:00:00 TALKSABOUT HOW TO VERIFY A TRANSACTION ON THE MAINNET.


hardhat gas reporter:
yarn add hardhat-gas-reporter --dev    run in terminal to download the hardhat-gas-reporter
THEN GO TO hardhat.config.js and add the below
require("hardhat-gas-reporter")
gasReporter: {
    enabled: true,
    .....,
    ......,
}
AND THEN RUN yarn hardhat test    // WITH THIS THE gas report of our project will be displayed in a tabular form
IF WE WANT THE gas Report file to always display in a .txt FILE, THEN ADD THIS TO hardhat.config.js FILE(gasReporter FUNCTION):
gasReporter: {
    enabled: true,
    outputFile: "gas_Report.txt",
    noColors: true,
    OPTIONAL:
    currency: "USD",
    coinmarketcap:  COINMARKETCAP_API_KEY (SIGN-UP ON COINMARKETCAP AND GET YOUR API_KEY)(SET COINMARKETCAP_API_KEY = ....     IN UR .env file   and then set const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY INSIDE THE hardhat.config.js FILE.)
    ......,
} // ALSO ADD gas_Report.txt file to your .gitignore file.
// TO DISABLE THE gas_Report FUNCTION, JUST SET enabled: false  


// SOLIDITY COVERAGE
yarn add --dev solidity-coverage
THEN GO TO hardhat.config.js and add the below
require("solidity-coverage")
AND THEN RUN: yarn hardhat coverage
// ALSO ADD coverage & coverage.json file to your .gitignore file.
THE BELOW DIAGRAM WILL BE DISPLAYED AS OUR code coverage
| File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |
| --------------------- | ------- | -------- | ------- | ------- | --------------- |
| **contracts/**        | 100%    | 100%     | 100%    | 100%    | 0               |
| **SimpleStorage.sol** | 100%    | 100%     | 100%    | 100%    | 0               |
| **All files**         | 100%    | 100%     | 100%    | 100%    | 0               |

// FROM THE ABOVE DIAGRAM, The output you’re seeing indicates that your tests have passed successfully, and the code coverage for your project is 100%.



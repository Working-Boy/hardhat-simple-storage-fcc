// THIS IS THE TEST FILE FOR THE SimpleStorage CONTRACT : 
// THIS file is used to test the deployment of the contract on the local network.

const { ethers } = require("hardhat")
const { expect, assert } = require("chai");


describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory(
      "SimpleStorage"
    ) // THIS WILL GRAB THE SimpleStorage CONTRACT.
    simpleStorage = await simpleStorageFactory.deploy();

  })

  it("Should start with a favorite number of 0", async function () {
    const currentFavoriteNumber = await simpleStorage.retrieve(); // THIS WILL RETRIEVE THE CURRENT FAVORITE NUMBER FROM THE CONTRACT.
    assert.equal(currentFavoriteNumber.toString(), "0"); // THIS WILL ASSERT THAT THE CURRENT FAVORITE NUMBER IS 0.
  }) // THIS WILL TEST THE INITIAL VALUE OF THE FAVORITE NUMBER.

  it("Should update when we call store", async function () {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue); // THIS WILL STORE THE NEW FAVORITE NUMBER IN THE CONTRACT.
    await transactionResponse.wait(1); // THIS WILL WAIT FOR 1 BLOCK CONFIRMATION.
    const updatedFavoriteNumber = await simpleStorage.retrieve(); // THIS WILL RETRIEVE THE UPDATED FAVORITE NUMBER FROM THE CONTRACT.
    assert.equal(updatedFavoriteNumber.toString(), expectedValue); // THIS WILL ASSERT THAT THE UPDATED FAVORITE NUMBER IS 7.
  })

})
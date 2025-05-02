// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    uint256 public favoriteNumber;

    // Function to store a value
    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    // Function to retrieve the stored value
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}

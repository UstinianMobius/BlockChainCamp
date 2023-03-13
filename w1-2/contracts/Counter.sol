// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

contract Counter {
    uint public count;
    address public owner;

    constructor() {
        count = 0;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "you aren't owner");
        _;
    }

    function addCount() public onlyOwner {
        count += 1;
    }

    function getCount() public view returns (uint) {
        // console.log("Changing count is ", count);
        return count;
    }
}

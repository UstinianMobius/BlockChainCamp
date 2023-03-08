// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
    uint public count;

    constructor() {
        count = 0;
    }

    function add() public {
        count += 1;
    }

    function getCount() public view returns(uint) {
        return count;
    }
}
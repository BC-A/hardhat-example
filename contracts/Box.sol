// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Book.sol';

contract Box {
    uint256 private _value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(address _bookAddress, uint256 value) public {
        Book book = Book(_bookAddress);
        book.set(value);
    }

    // Reads the last stored value
    function retrieve(address _bookAddress) public view returns (uint256) {
        Book book = Book(_bookAddress);
        uint256 current = book.get();
        return current;
    }
}
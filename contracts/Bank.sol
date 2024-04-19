// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './MyToken.sol';

contract Bank {
    uint256 private _value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Reads the last stored value
    function get(address _tokenAddress, uint256 value) public  {
        MyToken mtk = MyToken(_tokenAddress);
        mtk.mint(msg.sender, value);
    }

    function retrieve(address _tokenAddress) public returns (uint256) {
        MyToken mtk = MyToken(_tokenAddress);
        _value = mtk.balance(msg.sender);
        return _value;
    }
}
// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
    mapping(uint256 => uint256) public globalExitRootMap;

    function get(uint256 key) public view returns (uint256) {
        return globalExitRootMap[key];
    }

    function set(uint256 key, uint256 value) public {
        globalExitRootMap[key] = value;
    }
}
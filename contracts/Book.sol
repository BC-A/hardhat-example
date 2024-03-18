pragma solidity ^0.8.0;

contract Book {
    uint256 public value;

    function get() external view returns (uint256) {
        return value;
    }

    function set(uint256 _value) external {
        value = _value;
    }
}
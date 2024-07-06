
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


contract Crypt{
    struct Transaction{
        address sender;
        address receiver;
        uint256 amount;
        uint256 timeStamp;
        string message;
    }

    event Transfer(address from, address to, uint256 amount, uint256 timeStamp, string message);


    mapping (address=>Transaction[]) transactions;

    function verifyTransaction(address payable receiver, uint256 amount, string memory message) public{
        uint256 timeStamp=block.timestamp;
        transactions[msg.sender].push(Transaction(msg.sender, receiver, amount, timeStamp, message));
        transactions[receiver].push(Transaction(msg.sender, receiver, amount, timeStamp, message));

        emit Transfer(msg.sender, receiver, amount, timeStamp, message);
    }

    function getAllTransactions() public view returns(Transaction[] memory){
        return transactions[msg.sender];
    }

    function getTransactionCount() public view returns(uint256){
        return transactions[msg.sender].length;
    }
}
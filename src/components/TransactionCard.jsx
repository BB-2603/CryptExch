import React from 'react'
import './TransactionCard.css'
import { useContext } from 'react';
import { TransactionContext } from "../contexts/TransactionContext";


function TransactionCard({ addressFrom, addressTo, timestamp, amount, message }) {
    const { currentAccount } = useContext(TransactionContext);
    return (
        <>
            <div className='outerCard' style={{ backgroundColor: currentAccount.toLowerCase() !== addressFrom.toLowerCase() ? "#1a720d" : "#bd2121" }}>

                <div className="address" style={{ display: currentAccount.toLowerCase() !== addressFrom.toLowerCase() ? "block" : "none" }}>Received From: {addressTo}</div>
                <div className="address" style={{ display: currentAccount.toLowerCase() === addressFrom.toLowerCase() ? "block" : "none" }}>Sent To: {addressFrom}</div>
                <div className="timeStamp">TimeStamp: {timestamp}</div>
                <div className="amout">Amount: {amount}</div>
                <div className="message">Message: {message ? message : "No message"}</div>

            </div>
        </>
    )
}

export default TransactionCard;

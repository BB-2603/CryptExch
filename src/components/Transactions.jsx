import React, { useContext } from "react";
import './Transactions.css'
import { TransactionContext } from "../contexts/TransactionContext";
import dummy from '../contexts/test'
import TransactionCard from "./TransactionCard";

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
        <>
            <div className="back">
                <div className="msg">
                    {currentAccount === "" ? "Please Login to Your Metamask Account To Check History" : "Transaction History"}
                </div>
                {currentAccount !== "" && transactions.reverse().map((transaction, i) => (
                    < TransactionCard key={i} {...transaction} />
                ))}
            </div>
        </>
    );
}

export default Transactions; 
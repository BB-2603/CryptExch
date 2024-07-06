import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers'


import { contractAddress, ABI } from './constants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

const connectContract = async () => {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, ABI, signer);

    return transactionsContract;
}




export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [transactionData, setTransactionData] = useState({ addressTo: '', amount: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);


    const handleChange = (event, name) => {
        setTransactionData((prev) => ({ ...prev, [name]: event.target.value }));
    }

    const getDetails = async () => {
        const contract = await connectContract();
        const data = await contract.getAllTransactions();

        const trans = data.map((input) => ({
            addressFrom: input[0],
            addressTo: input[1],
            amount: Number(input[2]) / (10 ** 18),
            timestamp: new Date(Number(input[3])).toISOString(),
            message: input[4]
        }))
        setTransactions(trans);
    }

    const sendTransaction = async () => {
        setLoading(true);

        if (!ethereum) return alert('Please install Meta Mask!');

        try {
            const { addressTo, amount, message } = transactionData;

            const contract = await connectContract();
            const parsedAmt = ethers.parseEther(amount)

            const valueHex = parsedAmt.toString(16);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: '0x' + valueHex
                }]
            });


            const trxHash = await contract.verifyTransaction(addressTo, parsedAmt, message);


            await trxHash.wait();
            setLoading(false);
            alert('Transaction Successfully sent! Please check MetaMask for the status');
            window.location.reload();

        } catch (error) {
            alert('Failed to make the transaction!')
            setLoading(false);

            console.log(error)
        }
    }


    const isConnected = async () => {
        try {
            if (!ethereum) {
                return alert("Metamask is not installed!")
            }

            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length !== 0) {
                setCurrentAccount(accounts[0]);
                getDetails();
            }

        } catch (error) {
            return alert("Please Select a valid Account")
        }
    }

    useEffect(() => {
        isConnected();
    }, [])


    const connectWallet = async () => {

        try {
            if (!ethereum) {
                return alert("Metamask is not installed!")
            }

            let accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length !== 0) {
                setCurrentAccount(accounts[0]);

            } else {
                accounts = await ethereum.request({ method: 'eth_requestAccounts' })
                setCurrentAccount(accounts[0]);
            }

            getDetails();

        } catch (error) {
            return alert("Please Select a valid Account")
        }

    }


    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, transactionData, sendTransaction, handleChange, transactions, loading }} >
            {children}
        </ TransactionContext.Provider >
    )
}




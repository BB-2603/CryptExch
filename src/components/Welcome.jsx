import { SiEthereum } from 'react-icons/si'
import './Welcome.css'
import Loader from './Loader'
import { TransactionContext } from '../contexts/TransactionContext'



import { useContext, useEffect } from 'react'


const Welcome = () => {
    const { connectWallet, currentAccount, transactionData, sendTransaction, handleChange, loading } = useContext(TransactionContext);

    useEffect(() => {
        if (currentAccount) {
            const address = document.getElementsByClassName('walletAddress');
            address[0].innerHTML = currentAccount;
            const button = document.getElementsByClassName('WalletConnect')
            button[0].setAttribute("disabled", true)
            button[0].innerHTML = "Connected"
        }

    }, [currentAccount]);

    const connectToWallet = async () => {
        await connectWallet();

        const address = document.getElementsByClassName('walletAddress');
        address[0].innerHTML = currentAccount;
        const button = document.getElementsByClassName('WalletConnect')
        button[0].setAttribute("disabled", true)
        button[0].innerHTML = "Connected"
    }

    const submit = (e) => {
        const { addressTo, amount, message } = transactionData;

        e.preventDefault();

        if (!addressTo || !amount) return;
        sendTransaction();
    }


    return (
        <>
            <div className="outer">
                <div className="left">
                    <div className='headline'>
                        Send Crypto Across The World
                        <div className='Intro'>Explore the crypto world. Buy and sell cryptocurrencies easily using this web application.</div>
                    </div>

                    <button className='WalletConnect' onClick={connectToWallet}> Connect Wallet</button>

                    <div className="table">
                        <div className="row row1">
                            <div className="entity rel">Reliability</div>
                            <div className="entity sec">Security</div>
                            <div className="entity eth">Ethereum</div>
                        </div>
                        <div className="row row2">
                            <div className="entity web">Web 3.0</div>
                            <div className="entity low">Low Fees</div>
                            <div className="entity bkt">Blockchain</div>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <div className="card">
                        <div className="circle">
                            <div className="ethLogo">
                                <SiEthereum size={30} />
                            </div>
                        </div>

                        <div className="walletAddress">
                            Please Connect to your Metamask Wallet
                        </div>
                    </div>
                    <div className="infoGain">
                        <div className="info receiver">
                            <input type="text" name="addressTo" placeholder="Receiver Address" onChange={(event) => { handleChange(event, 'addressTo') }} />
                        </div>

                        <div className="info amount">
                            <input type="text" name="amount" placeholder="Amount(ETH)" onChange={(event) => { handleChange(event, 'amount') }} />
                        </div>

                        <div className="info message">
                            <input type="text" name="message" placeholder="Message(optional)" onChange={(event) => { handleChange(event, 'message') }} />
                        </div>

                        <div className="line">

                        </div>

                        <div className="sendEth">
                            <button onClick={submit} disabled={loading}>{loading ? <Loader /> : "Send Ethers"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Welcome; 
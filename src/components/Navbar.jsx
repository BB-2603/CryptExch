import './Navbar.css'
import { SiBlockchaindotcom } from "react-icons/si";

const Navbar = () => {
    return (
        <>
            <div className="Nav">
                <div className="logo">
                    <SiBlockchaindotcom size={35} />
                    <div className="logoname">CryptExch</div>
                </div>
                <ul>
                    <li>Market</li>
                    <li>Exchange</li>
                    <li>Tutorials</li>
                    <li>Wallets</li>
                    <li>
                        <button id="LoginBtn">Login</button>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default Navbar;
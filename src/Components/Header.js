import '../styles/Header.css'
import Logo from '../assets/logo.svg'

function Header(){
    return (
        <div id="header">
            <span id="header-logo"><img src={Logo} alt="Logo"></img></span>
            <span id="header-first-part">
                <button className="header-button">Features</button>
                <button className="header-button">Pricing</button>
                <button className="header-button">Resources</button>
            </span>
            <span id="header-second-part">
                <button className="header-button">Login</button>
                <button id="sign-up">Sign Up</button>
            </span>

        </div>
    )
}

export default Header;
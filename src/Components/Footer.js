import '../styles/Footer.css'
import Logo from '../assets/logo.svg'
const Footer = ()=>{
    return (
        <div id="footer">
        <div id="footer-name"><img src={Logo} alt="Logo"></img></div>
        
        <ul className="footer-list">
            <li className="footer-element footer-heading">Features</li>
            <li className="footer-element"><a href="/">Link Shortening</a></li>
            <li className="footer-element"><a href="/">Branded Links</a></li>
            <li className="footer-element"><a href="/">Analytics</a></li>
        </ul>
        <ul className="footer-list">
            <li className="footer-element footer-heading">Resources</li>
            <li className="footer-element"><a href="/">Blog</a></li>
            <li className="footer-element"><a href="/">Developers</a></li>
            <li className="footer-element"><a href="/">Support</a></li>
        </ul>
        <ul className="footer-list">
            <li className="footer-element footer-heading">Company</li>
            <li className="footer-element"><a href="/">About</a></li>
            <li className="footer-element"><a href="/">Our Team</a></li>
            <li className="footer-element"><a href="/">Carrers</a></li>
            <li className="footer-element"><a href="/">Contact</a></li>
        </ul>
        <ul id="footer-social-media">
            <li className="footer-element"><img src="./assets/icon-facebook.svg" alt="Facebook"></img></li>
            <li className="footer-element"><img src="./assets/icon-twitter.svg" alt="Twitter"></img></li>
            <li className="footer-element"><img src="./assets/icon-pinterest.svg" alt="Pinterest"></img></li>
            <li className="footer-element"><img src="./assets/icon-instagram.svg" alt="Instagram"></img></li>
        </ul>
        </div>
    )
}

export default Footer;
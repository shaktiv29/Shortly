import Logo from '../assets/logo.svg'
import {Foooter, FooterName, FooterElement, FooterLink, FooterHeading, FooterList} from '../styled/FooterStyle.js'
const Footer = ()=>{
    return (
        <Foooter>
        <FooterName><img src={Logo} alt="Logo"></img></FooterName>
        
        <FooterList>
            <FooterHeading>Features</FooterHeading>
            <FooterElement><FooterLink href="/">Link Shortening</FooterLink></FooterElement>
            <FooterElement><FooterLink href="/">Branded Links</FooterLink></FooterElement>
            <FooterElement><FooterLink href="/">Analytics</FooterLink></FooterElement>
        </FooterList>
        <FooterList>
            <FooterHeading>Resources</FooterHeading>
            <FooterElement><FooterLink href="/">Blog</FooterLink></FooterElement>
            <FooterElement><FooterLink href="/">Developers</FooterLink></FooterElement>
            <FooterElement><FooterLink href="/">Support</FooterLink></FooterElement>
        </FooterList>
        <FooterList>
            <FooterHeading>Company</FooterHeading>
            <FooterElement><FooterLink href="/">About</FooterLink></FooterElement>
            <FooterElement><FooterLink href="/">Our Team</FooterLink></FooterElement>
            <FooterElement><FooterLink href="/">Carrers</FooterLink></FooterElement>
            <FooterElement><FooterLink href="/">Contact</FooterLink></FooterElement>
        </FooterList>
        <FooterList>
            <FooterElement><img src="./assets/icon-facebook.svg" alt="Facebook"></img></FooterElement>
            <FooterElement><img src="./assets/icon-twitter.svg" alt="Twitter"></img></FooterElement>
            <FooterElement><img src="./assets/icon-pinterest.svg" alt="Pinterest"></img></FooterElement>
            <FooterElement><img src="./assets/icon-instagram.svg" alt="Instagram"></img></FooterElement>
        </FooterList>
        </Foooter>
    )
}

export default Footer;
import Logo from '../assets/logo.svg'
import { Headerr, HeaderLogo, HeaderButton, HeaderFirstPart, HeaderSecondPart, SignUp } from '../styled/HeaderStyle';

function Header(){
    return (
        <Headerr>
            <HeaderLogo><img src={Logo} alt="Logo"></img></HeaderLogo>
            <HeaderFirstPart>
                <HeaderButton>Features</HeaderButton>
                <HeaderButton>Pricing</HeaderButton>
                <HeaderButton>Resources</HeaderButton>
            </HeaderFirstPart>
            <HeaderSecondPart>
                <HeaderButton>Login</HeaderButton>
                <SignUp>Sign Up</SignUp>
            </HeaderSecondPart>
        </Headerr>
    )
}

export default Header;
import styled from 'styled-components'
export const Headerr = styled.div`
    display: flex;
    @media (max-width: 952px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const HeaderLogo = styled.span`
margin: 3% 0% 3% 10%;
@media (max-width: 952px) {
       margin:  3% auto;
    }
    `;

export const HeaderFirstPart = styled.span`display: flex;
margin: 3% 0% 4% 2%;
@media (max-width: 952px) {
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }`

export const HeaderSecondPart = styled.span`
display: flex;
margin: auto 20px auto 41%;
@media (max-width: 952px) {
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }`;

export const HeaderButton = styled.button`
background-color: white;
border: white;
color: rgb(156, 155, 161);
margin: 0% 4%;
&:hover{
    background-color: white;
    color: black;
}
@media (max-width: 952px) {
        margin-bottom: 20%;
    }`;

export const SignUp = styled.button`
height: 40px;
    width: 130px;
    border-radius: 150px 150px 150px 150px;
    padding-top: 0%;
    padding-bottom: 0%;
    margin: auto 20px;
    font-weight: 700;
    font-size: 15px;
    background-color: rgb(43, 209, 209);
    border: rgb(43, 209, 209) 1px solid;
    color: white;
    &:hover {
    background-color: rgb(155, 227, 226);
    border: rgb(155, 227, 226) 1px solid;
}`;
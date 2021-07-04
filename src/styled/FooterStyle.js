import styled from 'styled-components';

export const Foooter = styled.div`
display: flex;
flex-wrap: wrap;
background-color: rgb(35, 32, 39);
color: #bfbfbf;
background-size: cover;
margin-left: -10vw;
width: 100vw;
@media (max-width: 952px) {
    flex-direction: column;
        align-items: center;
        width: 160%;
        margin-left: -20vw;
}`;

export const FooterName = styled.div`
color: white;
    font-weight: 500;
    font-size: 30px;
    padding: 60px 160px 0px 160px;
    filter: invert(100%);
    filter: brightness(10);
    @media (max-width: 952px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

export const FooterElement = styled.li`
        padding: 7px;
        &:hover{
            color: cyan;
        }
        @media (max-width: 952px) {
        text-align: center;
        padding-left: 0%;
        margin-left: 0%;
    }
`;
export const FooterLink = styled.a`
        color: inherit;
        text-decoration: none;
`;

export const FooterHeading = styled.li`
        color: white;
    font-weight: 700;
    margin-bottom: 20px;
    padding: 7px;
        @media (max-width: 952px) {
        text-align: center;
        padding-left: 0%;
        margin-left: 0%;
        }
`;

export const FooterList = styled.ul`
        list-style-type: none;
        margin: 60px 20px;
    `;
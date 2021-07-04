import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle `
    * {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        font-family: Poppins, sans-serif;
        font-weight: 500;
        cursor: pointer;
    }
`

export const Inputing = styled.div `
    display: flex;
    @media (max-width: 952px) {
        flex-direction: column;
            align-items: center;
        }
`;

export const InputContainer = styled.div `
    background-image: url('../assets/bg-shorten-desktop.svg');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px 10px 10px 10px;
        margin-left: 10%;
        margin-top: 29px;
        height: 80px;
        width: 70vw;
        padding-top: 2%;
        padding-bottom: 1%;
        background-color: #3b3054;
        @media (max-width: 952px) {
            background-image: url('../assets/bg-shorten-mobile.svg');
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px 10px 10px 10px;
            margin-left: 20%;
            margin-top: 29px;
            height: 120px;
            width: 80%;
            align-items: center;
            padding-top: 2%;
            padding-bottom: 1%;
            background-color: #3b3054;
            flex-direction: column;
        }
`;

export const InputUrl = styled.input `
        padding: 12px;
        border-radius: 6px;
        width: 46vw;
        outline: none;
        margin: 10px 30px 10px 60px;
        @media (max-width: 952px) {
            margin-left: auto;
            margin-right: auto;
        }
`;

export const Btn = styled.button `
        padding: 6px 15px;
        color: white;
        background-color: rgb(43, 209, 209);
        border-radius: 6px;
        border: 1px rgb(43, 209, 209) solid;
        margin: 10px;
        width: 140px;
        height: 50px;
        &:hover {
            background-color: rgb(155, 227, 226);
        border: 1px rgb(155, 227, 226) solid;
        }
        @media (max-width: 952px) {
            padding: 6px 15px;
            color: white;
            background-color: rgb(43, 209, 209);
            border-radius: 6px;
            border: 1px rgb(43, 209, 209) solid;
            margin: 10px auto;
            width: 70%;
            height: 30px;
        &:hover {
            background-color: rgb(155, 227, 226);
            border: 1px rgb(155, 227, 226) solid;
        }
    }

`;
export const GreyBackground = styled.div `
        position: absolute;
        top: 850px;
        left: 0%;
        background-color: rgb(240, 241, 246);
        height: 1500px;
        width: 100vw;
        z-index: -100;
        @media (max-width: 952px) {
            position: absolute;
            top: 1315px;
            left: 0%;
            background-color: rgb(240, 241, 246);
            height: 1700px;
            width: 100vw;
            z-index: -100;
        }
`;

export const CopyButton = styled.button `
        padding: 6px 15px;
        color: white;
        background-color: rgb(43, 209, 209);
        border-radius: 6px;
        border: 1px rgb(43, 209, 209) solid;
        margin: 10px;
        height: 35px;
        width: 90px;
        &:hover {
            background-color: rgb(155, 227, 226);
        border: 1px rgb(155, 227, 226) solid;
        }
        &:focus {
            background-color: rgb(58, 48, 83);
        }
`;

export const MiniContainer = styled.span `
        flex-direction:column
`;

export const Warning = styled.div `
        margin: -5px 60px;
        color: rgb(240, 122, 122);
        font-style: italic;
        font-size: 100%;
        @media (max-width: 952px) {
            font-size: 60%;
            margin-left: 0%;
        }
`;

export const HistoryUrls = styled.div `
        margin-top: 90px;
        border-radius: 8px;
`;

export const OldLink = styled.span `
        margin: 5px;
        margin-top: auto;
        margin-bottom: auto;
        background-color: white;
        padding-bottom: 15px;
        @media (max-width: 952px) {
            border-bottom: rgb(229, 229, 229) 0.5px solid;
        }
`;

export const NewLink = styled.span `
        display: flex;
        flex-wrap: wrap;
        margin: 5px;
        margin-top: 0px;
        margin-bottom: 4px;
        /* padding-left: 55%; */
        display: flex;
        background-color: white;
        margin-right: 0%;  
        @media (max-width: 952px) {
            flex-direction: column;
            text-align: center;
            align-items: center;
        } 
`;

export const LinkHistory = styled.div `
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style-type: none;
        background-color: white;
        padding: 10px;
        border-radius: 8px;
        background-size: cover;
        margin-top: 10px;
        @media (max-width: 952px) {
            flex-direction: column;
            text-align: center;
        }
    `;

export const NewLinkk = styled.span `
        margin-top: 20px;
        background-color: white;
        color: rgb(74, 193, 186);`;
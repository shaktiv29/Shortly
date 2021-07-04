import styled from 'styled-components'
import bigboost from '../assets/bg-boost-desktop.svg'
import smallboost from '../assets/bg-boost-mobile.svg'

export const Booost = styled.div`
    background-image: url(${bigboost});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(58, 48, 83);
    text-align: center;
    height: 15vw;
    width: 100vw;
    margin-left: -10vw;
    @media (max-width:952px) {
        background-image: url(${smallboost});
        background-size: cover;
        background-repeat: no-repeat;
        background-color: rgb(58, 48, 83);
        text-align: center;
        height: 260px;
        width: 160%;
        margin-left: -20vw;
    }
`;

export const BoostHead = styled.div`
        font-weight: 700;
    font-size: 230%;
    color: white;
    padding: 40px 30px 10px 0px;
    margin-left: -8%;
    @media (max-width:952px) {
        margin-left: 0%;
        margin-right: auto;
    }
    `;

export const BoostButton = styled.button`
        height: 40px;
    width: 150px;
    border-radius: 150px;
    padding-top: 0%;
    padding-bottom: 0%;
    margin: 20px;
    margin-left: -8%;
    font-weight: 700;
    font-size: 15px;
    background-color: rgb(43, 209, 209);
    border: rgb(43, 209, 209) 1px solid;
    color: white;
    &:hover{
        background-color: rgb(155, 227, 226);
        border: rgb(155, 227, 226) 1px solid;
    }
    @media (max-width:952px) {
        margin-left: 0%;
        margin-right: auto;
    }
    `;
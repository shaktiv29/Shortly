import styled from "styled-components";

export const Illustrationn = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 5%;
    margin-bottom: 5%;
    @media (max-width:952px) {
        flex-direction: column;
        align-items: baseline;
    }
    `;

export const IllustrationText = styled.div`
    margin-left: 10%;
    @media (max-width:952px) {
        margin-top: 10%
    }
    `;

export const IllustrationHeading = styled.div`
    font-size: 450%;
    font-weight: 800;
    color: rgb(52, 48, 62);
    line-height: 100%;
    @media (max-width:952px) {
        margin-top: 10%
    }
    `;

export const IllustrationDescription = styled.div`
    color: rgb(170, 169, 164);
    padding-top: 2%;
    `;

export const IllustrationImagee = styled.img`
    display: flex;
    height: 50%;
    width: 50%;
    @media (max-width:952px) {
        min-width: 600px;
    }
    `;

export const IllustrationButton = styled.button`
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
    margin-left: 0%;
    `;

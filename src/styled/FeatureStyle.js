import styled from "styled-components";

export const Featuress = styled.section`
    text-align: center;
    margin-top: 7%;
    color: rgb(53, 51, 62);
    @media (max-width:952px) {
        align-items: center;
    }
`;

export const FeatureHeading = styled.div`
    font-weight: 700;
    font-size: 40px;
    @media (max-width:952px) {
        margin-left: 0%;
    }
`;

export const FeatureDescription = styled.div`
    color: rgb(149, 149, 159);
    margin-top: 1%;
    @media (max-width:952px) {
        margin-left: 0%;
    }
`;

export const FeatureCards = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 0%;
    margin-top: 10%;
    margin-bottom: 10%;
    @media (max-width:952px) {
        flex-direction: column;
        align-items: center;
        margin-left: -10%;
        margin-top: 130px;
    }
`;

export const FeatureCard1 = styled.li`
    height: 80%;
    width: 330px;
    background-color: white;
    text-align: left;
    margin-right: 5%;
    border-radius: 10px;
    margin-top: -5%;
    @media (max-width:952px) {
        margin-left: auto;
        margin-right: auto;
    }
    `;

export const FeatureCard2 = styled.li`
    height: 80%;
    width: 330px;
    background-color: white;
    text-align: left;
    margin-right: 5%;
    border-radius: 10px;
    @media (max-width:952px) {
        margin-top: 5%;
        margin-left: auto;
        margin-right: auto;
    }
    `;

export const FeatureCard3 = styled.li`
    height: 80%;
    width: 330px;
    background-color: white;
    text-align: left;
    margin-right: 5%;
    border-radius: 10px;
    margin-right: -15%;
    margin-top: 5%;
    @media (max-width:952px) {
        margin-left: auto;
        margin-right: auto;
    }
    `;

export const CardBox = styled.div`
    display: flex;
    height: 10px;
    width: 55px;
    background-color: rgb(39, 207, 208);
    margin-left: -54px;
    margin-top: 120px;
    @media (max-width:952px) {
        margin-left: auto;
        margin-right: auto;
        height: 55px;
        width: 12px;
        margin-top: -10%;
    }
`;

export const CardBox2 = styled.div`
    display: flex;
    height: 10px;
    width: 55px;
    background-color: rgb(39, 207, 208);
    margin-left: -54px;
    margin-top: 120px;
    @media (max-width:952px) {
        margin-left: -100%;
        margin-top: 0%;
        margin-left: auto;
        margin-right: auto;
        height: 55px;
        width: 12px;
    }
`;

export const SquareImage = styled.div`
    display: flex;
    background-color: rgb(52, 51, 83);
    height: 80px;
    width: 80px;
    border-radius: 50%;
    text-align: center;
    justify-content: center;
    margin-top: -10%;
    margin-left: 10%;
    img{
        display: flex;
    margin: auto;
    }
    @media (max-width:952px) {
        margin-left: auto;
        margin-right: auto;
    }
    `;

export const CardTitle = styled.div`
    margin: 30px;
    font-size: 25px;
    font-weight: 700;
    `;

export const CardDescription = styled.div`
    margin: 30px;
    font-size: 14px;
    color: rgb(175, 174, 180)
    `;
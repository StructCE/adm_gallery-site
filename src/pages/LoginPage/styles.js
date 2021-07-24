import styled from "styled-components";
import LoginBG from '.././../assets/LoginBG.jpg';

export const Container = styled.section`
    display: flex;
    height: 100vh;
`;

export const FormsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: auto 0;
    max-width: 36rem;
    width: 100%;
    form {
        max-width: 23.438rem;
        width: 100%;
    }
    h1 {
        max-width: 23.438rem;
        font-size: 2.5rem;
        color: #0A2463; 
        font-weight: bold;
        text-align: center;
        margin-bottom: 20%;
    };
    p {
        max-width: 23.438rem;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #A9927D;
        line-height: 0.1rem;
        margin: 20px 0 20px;
    } 

    p span { 
        background: #fff;
        padding: 0 10px;
        color: #5E503F;
    }
    Button {
        max-width: 23.438rem;
        width: 100%;
        min-height: 4.375rem;
    }
`;

export const ImageContainer = styled.div`
    background: url(${LoginBG}) no-repeat center;
    background-size: cover;
    flex: 3;
`;
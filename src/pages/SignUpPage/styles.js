import styled from "styled-components";
import SignUpBG from '.././../assets/SignUpBG.jpg'

export const Container = styled.section`
    display: flex;
    height: 100vh;
    @media only screen and (max-width: 1000px) {
        height: auto;
    }
`

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
        width: 80%;
    };
    h1 {
        max-width: 23.438rem;
        width: 80%;
        font-size: 2.5rem;
        @media only screen and (max-width: 1000px) {
            font-size: 2rem;
        }
        color: #0A2463; 
        font-weight: bold;
        text-align: center;
        margin-bottom: 10%;
    };
    span {
        display: flex;
        font-size: 1.875rem;
        text-align: center;
        align-items: center;
        justify-content: center;
    };

    @media only screen and (min-width: 1000px) {

    }
`

export const ImageContainer = styled.div`
    background: url(${SignUpBG}) no-repeat center;
    background-size: cover;
    flex: 3;
`
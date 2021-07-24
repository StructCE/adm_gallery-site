import styled from "styled-components";
import SignUpBG from '.././../assets/SignUpBG.jpg'

export const Container = styled.section`
    display: flex;
    height: 100vh;
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
        width: 100%;
    }
    h1 {
        max-width: 23.438rem;
        font-size: 2.5rem;
        color: #0A2463; 
        font-weight: bold;
        text-align: center;
        margin-bottom: 10%;
    };
`

export const ImageContainer = styled.div`
    background: url(${SignUpBG}) no-repeat center;
    background-size: cover;
    flex: 3;
`
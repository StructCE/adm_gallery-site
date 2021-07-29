import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10vh;
    /* justify-content: center; */
    align-items: center;
    position: relative;
    text-align: center;
    h1 {
        font-family: 'playfair display', sans-serif;
        font-size: 3rem;
        color: #0A2463;
    }

    .line {
        position: absolute;
        top: 4.5rem;
        right: 20vw;
    }

    .icon {
        position: absolute;
        top: 3rem;
        right: 18vw;
    }

    @media (max-width: 1200px){
        .line, .icon{
            display: none;
        }
    }

    @media (max-width: 768px){
        h1 {
            font-size: 2.5rem;
        }
    }
`
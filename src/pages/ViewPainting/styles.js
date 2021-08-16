import styled from "styled-components";

export const FirstScreen = styled.div`
    height: 100vh;
    background-color: #5E503F;
    color: #F2F4FE;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
    text-align: center;
    position: relative;

    h1, h3 {
        font-style: italic;
    }

    h1 {
        font-size: 7.5rem;
    }

    h3 {
        font-size: 3rem;
        font-weight: normal;
    }

    .year {
        align-self: flex-end;
        margin-right: 15vw;
        margin-top: -2rem;
    }

    .the-painting {
        padding-top: 5vh;
        display: flex;
        margin: 0 3vw;
        width: 90%;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        height: 70vh;

        .image-container {
            display: flex;
            justify-content: center;
            flex: 2;
        }

        .about {
            display: flex;
            flex-direction: column;
            gap: 5rem;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 3rem 0;
            flex: 1;

            p {
                font-size: 1.75rem;
                display: flex;
                gap: .25rem
            }

            span {
                cursor: pointer;
                display: flex;
                align-items: center;
            }
        }

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    h5 {
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.75rem;
        color: #A9927D;
        font-weight: normal;

        :hover {
            cursor: pointer;
        }
    }

`

export const SecondScreen = styled.div`
    
`
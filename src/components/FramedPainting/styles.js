import styled from "styled-components";

export const Container = styled.div`
    height: 80vh;
    width: 25rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.25rem
`

export const Frame = styled.div`
    height: 40vh;
    padding: 1.25rem;
    margin: 1.75rem 0;
    display: flex;
    justify-content: center;
    /* margin: 1rem; */

    img {
        max-height: 100%;
        max-width: 100%;
        border: .25rem solid #F2F4F3;
        outline: 1.25rem solid #5E503F;
        box-shadow: 1.7rem 1.7rem 1.3rem black;
        align-self: center;
        display: block;
        margin: auto;
    }
`

export const Plate = styled.div`
    min-width: 15rem;
    max-width: 100%;
    padding: 1rem;
    text-align: center;
    border: .75rem solid #A9927D;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.1rem;
    color: rgba(0, 0, 0, 0.5);
    line-height: 2rem;
    margin-top: 5vh;

    // Plaquinha top que catei de um site aí (https://codepen.io/sato4yoshida/pen/DHouB)
    text-decoration: none;
    /* text-shadow: 1px 1px 0 #ffffff; */
    box-shadow:
        2px 2px 0.5em rgba(122, 122, 122, 0.55),
        inset 1px 1px 0 rgba(255, 255, 255, 0.9),
        inset -1px -1px 0 rgba(0, 0, 0, 0.34)
    ;
    /* border: 1px solid #dedede; */
    background: linear-gradient(-72deg, #dedede, #ffffff 16%, #dedede 21%, #ffffff 24%,
                    #dedede 36%,#ffffff 45%, #ffffff 60%, #dedede 72%, #ffffff 80%, #dedede 84%, #a1a1a1);


    h2 {font-size: 1.6rem}

    h4 {
        font-size: 1.2rem;
        font-weight: normal
    }

    div {
        display: flex;
        justify-content: space-between;

        span {
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: .3rem;
            cursor: pointer;
        }
    }
`
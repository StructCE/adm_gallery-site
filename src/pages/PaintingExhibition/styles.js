import styled from "styled-components";

export const PaintingsPage = styled.section`
    background: #F2F4F3;
    padding: 10vh 0;
    min-height: 100vh;
`

export const Paintings = styled.div`
    width: 90vw;
    margin: auto;
    padding-top: 10vh;

    .search-filters {
        display: flex;
        justify-content: space-between;
        margin: 0 5vw;
        align-items: flex-start;

        @media (max-width: 768px){
            margin: 0;
        }

        @media (max-width: 540px){
            flex-direction: column;
            align-items: center;
            gap: 5vh
        }
    }
`

export const Line = styled.hr`
    width: 70rem;
    border: unset;
    border-top: .15rem solid #c1c3c2;
    margin: auto;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2vh auto;
`
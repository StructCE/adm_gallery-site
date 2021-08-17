import styled from "styled-components";

export const Container = styled.button`
    outline: none;
    border: 3px solid #5D5FEF;
    border-radius: 5rem;
    color: #000;
    height: 4.375rem;
    width: 4.375rem;
    margin: 0.5rem;
    @media only screen and (max-width: 1000px) {
        height: 3.5rem;
        width: 3.5rem;
        font-size: 1.3rem;
    }
    font-size: 1.875rem;
    &:hover {
        background-color: #AEAFF7;
        transition: 0.2s;
        cursor: pointer;
    }
`
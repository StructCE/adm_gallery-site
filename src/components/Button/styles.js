import styled from "styled-components";

export const Container = styled.button`
    background-color: #A9927D;
    outline: none;
    border: 3px solid #5E503F;
    border-radius: 50px;
    color: #F2F4F3;
    height: 4.375rem;
    width: 100%;
    @media only screen and (max-width: 1000px) {
        height: 3.5rem;
        font-size: 1.3rem;
    }
    font-size: 1.875rem;
    &:hover {
        background-color: #5E503F;
        transition: 0.2s;
    }
`
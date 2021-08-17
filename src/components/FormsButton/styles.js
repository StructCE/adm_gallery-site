import styled from "styled-components";

export const Container = styled.button`
    background-color: #5D5FEF;
    outline: none;
    border: 3px solid #5D5FEF;
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
        background-color: #AEAFF7;
        transition: 0.2s;
    }
`
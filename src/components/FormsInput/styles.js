import styled, {css} from 'styled-components';

export const Container = styled.div`
    background-color: white;
    height: 4.375rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border: 3px solid #5D5FEF;
    border-radius: 50px;
    transition: 0.2s;
    margin-bottom: 2.75rem;
    @media only screen and (max-width: 1000px) {
        height: 3.5rem;
    }
    
    ${props => (props.isFocus || props.isFilled) &&
        css`
            border-color: #5E503F;
        `
    }
    input {
        margin-left: 1.3rem;
        margin-right: 0.8rem;
        height: 100%;
        width: 100%;
        font-size: 1.875rem;
        @media only screen and (max-width: 1000px) {
            font-size: 1.3rem;
        }
        outline: none;
        border: none;
        color: #000;
        font-weight: lighter;
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
    }
`;
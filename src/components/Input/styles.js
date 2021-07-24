import styled, {css} from 'styled-components';

export const Container = styled.div`
    background-color: white;
    height: 4.375rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border: 3px solid #A9927D;
    border-radius: 50px;
    transition: 0.2s;
    margin-bottom: 2.75rem;

    svg {
        color: #A9927D;
        transition: 0.2s;
    }
    
    ${props => (props.isFocus || props.isFilled) &&
        css`
            border-color: #5E503F;
            svg {
                color: #5E503F;
            }
        `
    }
    input {
        margin-left: 1.3rem;
        margin-right: 1.3rem;
        height: 100%;
        width: 100%;
        font-size: 1.875rem;
        outline: none;
        border: none;
        color: #808080;
        font-weight: lighter;
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
    }
`;
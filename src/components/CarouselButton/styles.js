import styled from 'styled-components';

export const Container = styled.button`
    background-color: rgba(242, 244, 243, 0.1);
    color: var(--Cultured);
    height: 3.125rem;
    outline: none;
    border: none;
    color: #FFF;
    font-weight: bold;
    font-size: 1.1rem;
    width: 100%;
    transition: 0.2s;
    border-radius: 50%;
    &:hover {
      background-color: rgba(242, 244, 243, 0.5);
      cursor: pointer;
    }
`;
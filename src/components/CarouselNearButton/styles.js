import styled from 'styled-components';

export const Container = styled.p`
    outline: none;
    border: none;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    margin-left: 2vw;
    margin-right: 2vw;
    opacity: 0.5;
    font-size: 4rem;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
`;
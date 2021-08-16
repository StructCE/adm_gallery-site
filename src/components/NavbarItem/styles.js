import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  border: none;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  margin-left: 2.5vw;
  &:hover{
    color: rgba(255, 255, 255, 0.8);
  }

  span{
    margin-left: 0.5vw;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 700px) and (orientation: portrait){
    display: block;
  }
`;

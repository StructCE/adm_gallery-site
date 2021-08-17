import styled, { css } from 'styled-components';
import { MdMenu } from 'react-icons/md'
import { FiEyeOff } from "react-icons/fi";

export const NavbarBtn = styled(MdMenu)`
  font-size: 2rem;
  position: fixed;
  z-index: 100;
  top: 1rem;
  right: 1rem;
  margin: 0px;
  float: right;
  z-index: 100;
  color: black;
  &:hover{
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
    border-radius: 10%;
  }
`;

export const CloseMenu = styled(FiEyeOff)`
  font-size: 1.25rem;
  height: 7vh;
  margin-right: 3vw;
  color: white;
  float: right;
  &:hover{
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 700px) and (orientation: portrait){
    position: normal;
    float: right;
    margin-top: 1vh;
    margin-right: 3.5vw;
  }
`;

export const NavbarMenu = styled.div`
  background-color: var(--RoyalBlue);
  width: 100vw;
  height: 7vh;
  line-height: 7vh;
  position: fixed;
  z-index: 200;
  box-shadow: 0px 2px 3px black;
  text-align: center;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  ${props => props.state && css`
    transform: translateX(0%)
  `};

  @media screen and (max-width: 700px) and (orientation: portrait){
    height: 100vh;
    line-height: 15vh;
  }
`;

export const BtnContainer = styled.span`
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
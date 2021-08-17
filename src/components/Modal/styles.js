import styled from 'styled-components';
import { MdClose } from 'react-icons/md'

export const Background = styled.div`
  all: initial;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;


export const ModalWrapper = styled.div`
  margin: 1%;
  z-index: 20;

  position: relative;
`;

export const CloseBtn = styled(MdClose)`
    background-color: rgba(242, 244, 243, 0.1);
    color: var(--Cultured);
    font-size: 2rem;
    outline: none;
    border: none;
    color: #FFF;
    font-weight: bold;
    transition: 0.2s;
    border-radius: 20%;
    z-index: 20;
    &:hover {
      background-color: rgba(242, 244, 243, 0.5);
      cursor: pointer;
    }

    @media screen and (max-height: 1080px) {
      position: fixed;
      left: 2rem;
      top: 2rem;
    }
`;
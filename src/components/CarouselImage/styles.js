import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  max-height: 90vh;
  overflow: hidden;
  justify-content: center;
  align-content: center;
  
  img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
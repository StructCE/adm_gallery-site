import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: var(--PerisanPlum);
  color: white;

  .artist-img{
    img{
      object-fit: cover;
      max-width: 100%;
      width: 50vw;
      height: 100%;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
      object-position: fill;
    }
  }
`;
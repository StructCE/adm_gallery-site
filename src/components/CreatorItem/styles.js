import styled from 'styled-components';

export const Container = styled.div`
    color: #FFF;
    font-size: 1rem;
    width: 15vw;
    text-align: center;

    img{
      border-radius: 50%;
      object-fit: cover;
      max-width: 100%;
      width: 8vw;
    }

    .creator-name{
      margin-top: 4px;
    }

    /* Portrait phones */
    @media screen and (max-width: 700px) and (orientation: portrait){
      width: 8rem;

      img {
        width: 6rem;
      }
    }

    @media screen and (min-width: 700px) and (orientation: portrait){
      width: 12rem;
      font-size: 1.25rem;

      img {
        width: 9rem;
      }
    }
`;
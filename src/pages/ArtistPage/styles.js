import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: var(--PerisanPlum);
  color: white;

  .form-buttons{
        position: fixed;
        bottom:0;
        left: 0;
        margin: 1rem;
        display: flex;
        flex-direction: column;
    }

  .artist-data{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 50%;
    padding: 2vw;
    height: 100vh;

    .artist-name{
      text-align: center;
      font-size: 5rem;
      font-style: italic;
      margin-bottom: 2vw;
    }

    .artist-place{
      display: flex;
      justify-content: center;
      font-size: 1.35rem;
      color: rgba(255, 255, 255, 0.7);
    }

    .artist-dates{
      display: flex;
      justify-content: space-around;
      font-size: 1.35rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 3vw;
    }

    .artist-bio {
      align-items: center;
      text-align: justify;
      text-justify: inter-word;
      font-size: 1.35rem;
    }

    .paintings-btn{
      display: flex;
      align-self: center;
      width: 60%;
      padding: 0;
    }

    @media screen and (max-width: 830px){
      flex-direction: column;
      max-width: 100%;
      height: initial;
      margin: 1rem;

      .artist-name{
        font-size: 4rem;
      }

      .artist-place{
        font-size: 1.3rem;
      }

      .artist-dates{
        font-size: 1.1rem;
      }

      .artist-bio {
        margin-bottom: 1rem;;
      }
    }
  }
  
  @media screen and (max-width: 830px){
    flex-direction: column;
    height: initial;
  }

  .artist-img{
    img{
      object-fit: cover;
      width: 50vw;
      height: 100%;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 830px){
        width: 100vw;
        height: 50%;
      }
    }
  }
`;
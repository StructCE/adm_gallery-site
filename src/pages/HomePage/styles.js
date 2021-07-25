import styled from 'styled-components';

export const LandingContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
  background-color: var(--Cultured);

  .row{
    display: flex;
    height: 33vh;
  }

  .landing-img{
    img{
      object-fit: cover;
      max-width: 100%;
      width: 50vw;
      height: 34vh;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
      object-position: center top;
    }
  }

  .title-text{
    font-size: 21vw;
    line-height: 29vh;
    height: 33vh;
  }

  .quote-text{
    font-size: 1.5vw;
    max-width: 20vw;
    margin: 2vw;
  }

  /* Portrait phones */
  @media screen and (max-width: 700px) and (orientation: portrait){
    flex-direction: column;
    flex-wrap: wrap;

    .quote-text{
      display: none;
    }

    .row{
      display: inline;
      height: auto;
    }

    .landing-img{
      img{
        object-fit: cover;
        max-width: 100%;
        width: 100%;
        height: 40vh;
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
        object-position: center top;
      }
    }

    .title-text{
      font-size: 38vw;
      line-height: 16vh;
      height: 18vh;
    }
  }

  /* Portrait tablets */
  @media screen and (min-width: 700px) and (orientation: portrait){
    flex-direction: column;
    flex-wrap: wrap;

    .quote-text{
      display: none;
    }

    .row{
      display: inline;
      height: auto;
    }

    .landing-img{
      img{
        object-fit: cover;
        max-width: 100%;
        width: 100%;
        height: 40vh;
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
        object-position: center top;
      }
    }

    .title-text{
      font-size: 26vw;
      line-height: 16vh;
      height: 18vh;
    }
  }
`;

export const AboutUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100vh;
  z-index: 1;
  color: white;
  position: relative;
  background: linear-gradient(180deg, #5E503F 0%, rgba(94, 80, 63, 0.94) 100%);

  .about-us-section{
    display: flex;
    width: 60vw;
    margin-left: 10px;
    height: 67vh;
  }

  .about-us-info{
    width: 45vw;
  }

  .about-us-title{
    font-style: italic;
    font-size: 8vh;
  }

  .about-us-text{
    font-size: 3vh;
    max-height: 67vh;
  }

  .about-us-img{
    img{
      object-fit: cover;
      object-position: center top;
      max-width: 100%;
      width: 60vw;
      height: 60vh;
    }
    margin: 20px;
  }

  .creators-section{
    justify-content: space-between;
    margin-left: 10px;
  }

  .creators-profiles{
    display: flex;
    margin-top: 2rem;
    width: 35vw;
    justify-content: space-between;
  }

  .creators-title{
    font-style: italic;
    font-size: 3rem;
  }

  .creators-img{
    position: absolute;
    bottom: 0px;
    right: 0px;
    img{
      object-fit: cover;
      object-position: center top;
      max-width: 100%;
      width: 30vw;
      height: 60vh;
    }
  }

  .bg-about-us{
    position: absolute;
    bottom: 0px;
    z-index: -1;
    img{
      object-fit: cover;
      object-position: center left;
    }
  }

  /* Portrait phones */
  @media screen and (max-width: 700px) and (orientation: portrait){
    .bg-about-us{
      display: none;
    }

    .about-us-section{
      display: flex;
      width: 100vw;
      margin-left: 10px;
      height: 63vh;
    }

    .about-us-info{
      width: 45vw;
    }

    .about-us-title{
      font-style: italic;
      font-size: 4vh;
    }

    .about-us-text{
      font-size: 2vh;
      max-height: 67vh;
    }

    .about-us-img{
      img{
        position: relative;
        bottom: 0px;
        object-fit: cover;
        object-position: center top;
        max-width: 100%;
        width: 60vw;
        height: 60vh;
      }
      margin: 20px;
    }

    .creators-section{
      justify-content: space-between;
      margin-left: 0;
    }

    .creators-profiles{
      display: flex;
      margin-top: 2rem;
      width: 100vw;
      justify-content: space-between;
    }

    .creators-title{
      font-style: italic;
      font-size: 2rem;
      margin-left: 10px;
    }

    .creators-img{
      display: none;
    }
  }

  /* Portrait tablets */
  @media screen and (min-width: 700px) and (orientation: portrait){
    .bg-about-us{
      display: none;
    }

    .about-us-section{
      display: flex;
      width: 100vw;
      margin-left: 10px;
      height: 63vh;
    }

    .about-us-info{
      width: 45vw;
    }

    .about-us-title{
      font-style: italic;
      font-size: 6vh;
    }

    .about-us-text{
      font-size: 2.4vh;
      max-height: 67vh;
    }

    .about-us-img{
      img{
        position: relative;
        bottom: 0px;
        object-fit: cover;
        object-position: center top;
        max-width: 100%;
        width: 60vw;
        height: 60vh;
      }
      margin: 20px;
    }

    .creators-section{
      justify-content: space-between;
      margin-left: 0;
    }

    .creators-profiles{
      display: flex;
      margin-top: 2rem;
      width: 100vw;
      justify-content: space-between;
    }

    .creators-title{
      font-style: italic;
      font-size: 3rem;
      margin-left: 10px;
    }

    .creators-img{
      display: none;
    }
  }
`;
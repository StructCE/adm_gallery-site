import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
    width: 100vw;
    height: 100%;
    color: #FFF;
    background-color: var(--Grullo);

    button{
      font-size: 2rem;
      height: 4rem;
      width: 4rem;
    }
    
    .colletion-header{
      font-style: italic;
      text-align: center;
      font-size: 2.8rem;
      height: 40vh;
    }

    .carousel-main{
      display: flex;
      align-self: center;
      justify-self: center;
    }

    .collection-info{
      margin-left: 2vw;
      margin-right: 2vw;
      width: 50vw;
    }

    .collection-title{
      text-align: center;
      font-size: 4rem;
    }

    .collection-desc{
      color: rgba(255, 255, 255, 0.85);
      display: flex;
      font-size: 1.2rem;
      text-align: center;
    }

    .collection-photos{
      display: flex;
      align-self: center;
      justify-self: center;
      text-align: center;
      justify-content: space-between;
      overflow: hidden;
      padding-top: 10vh;
    }

    .middle-img{
      margin-left: 2vw;
      margin-right: 2vw;
      overflow: hidden;
      filter: brightness(75%);
      transition: all 0.3s ease-out;
    }
    .middle-img:hover{
      filter: brightness(100%);
      transform: translate(0, -2vh)
    }

    .left-img{
      overflow: hidden;
      filter: brightness(75%);
      transition: all 0.3s ease-out;
    }
    .left-img:hover{
      filter: brightness(100%);
      transform: translate(0, -2vh)
    }

    .right-img{
      overflow: hidden;
      filter: brightness(75%);
      transition: all 0.3s ease-out;
    }
    .right-img:hover{
      filter: brightness(100%);
      transform: translate(0, -2vh)
    }

    @media screen and (min-width: 700px) and (orientation: portrait){
      .left-img{
        display: none;
      }

      .right-img{
        display: none;
      }
    }

    @media screen and (max-width: 700px) and (orientation: portrait){
      .left-img{
        display: none;
      }

      .right-img{
        display: none;
      }

      .left-near{
        display: none;
      }

      button{
        font-size: 1.75rem;
        height: 3rem;
        width: 3rem;
      }

      .colletion-header{
        font-size: 2.5rem;
        height: 20vh;
      }

      .collection-info{
        margin-left: 0;
        margin-right: 0;
        width: 70vw;
      }

      .collection-title{
        font-size: 2.75rem;
      }
    }

    @media screen and (max-width: 330px) and (orientation: portrait){
      .left-img{
        display: none;
      }

      .right-img{
        display: none;
      }

      .left-near{
        display: none;
      }

      button{
        font-size: 1.25rem;
        height: 2rem;
        width: 2rem;
      }

      .colletion-header{
        font-size: 2rem;
        height: 15vh;
      }

      .collection-info{
        margin-left: 0;
        margin-right: 0;
        width: 75vw;
      }

      .collection-title{
        font-size: 2.5rem;
      }
    }
`;
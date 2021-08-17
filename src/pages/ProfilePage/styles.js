import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;
  background-color: var(--Cultured);

  .info-bar{
    width: 92px;
    height: 100vh;
    border-width: thin;
    border-radius: 0px 50px 50px 0px;
    background-color: white;
    position: relative;
    float: left;
    z-index: 1;

    .info-text{
      position: absolute;
      bottom: 50%;
      writing-mode: vertical-lr;
      transform: rotate(-180deg);
      font-size: 30px;
      right: 35%;
    }

    .icons-area{
      font-size: 50px;
      text-align: center;
      position: absolute;
      bottom: 0;
      margin-bottom: 10px;
      .color-icon:hover{
        cursor: pointer;
        filter: grayscale(70%);
      }
      .config-icon:hover{
        cursor: pointer;
        filter: grayscale(70%);
      }
    }
  }

  .profile-photo{
    margin-left: 50px;
    position: absolute;
    left: 0%;
    bottom: 48%;
    z-index: 0;
    img{
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
    }
    .edit-icon{
      font-size: 60px;
      position: absolute;
      margin-left: 60px;
      left: 0%;
      bottom: 35%;
      z-index: 2;
      display: none;
    }
  }.profile-photo:hover{
    cursor: pointer;
    img{
      opacity: 0.6;
      filter: blur(2px);
    }
    .edit-icon{
      display: block;
    }
  }

  .lock-icon{
    background-color: rgba(255,255,255,0.85);
    border-radius: 50%;
    padding: 2px;
    font-size: 30px;
    margin-left: 110px;
    position: absolute;
    left: 0%;
    bottom: 47%;
    z-index: 2;
  }.lock-icon:hover{
    cursor: pointer;
    font-size: 40px;
    bottom: 46.5%;
    margin-left: 107px;
    background-color: rgba(255,255,255,0.95);
  }

  .user-info{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding-top: 5vh;
    .user-data{
      margin-left: auto;
      margin-right: auto;
      width: 70vw;
    }
    h1{
      line-height: 10rem;
      font-size: 10rem;
      font-style: italic;
      mix-blend-mode: multiply;
    }
    p{
      text-overflow: ellipsis;
      font-size: 2rem;
      padding-top: 5rem;
    }

    .collection-info{
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 450px){
    .info-bar{
      width: 100vw;
      height: 80px;
      border-radius: 0px 0px 50px 50px;
      float: initial;

      .info-text{
        bottom: initial;
        writing-mode: horizontal-tb;
        transform: rotate(0);
        font-size: 30px;
        padding-top: 1rem;
      }

      .icons-area{
        font-size: 40px;
        text-align: center;
        bottom: initial;
        margin-bottom: initial;
        position: absolute;
        left: 0;
        margin-left: 1rem;
        margin-top: 1rem;
        .color-icon{
          margin-right: 0.5rem;
        }
      }
    }

      .profile-photo{
      margin-left: 36%;
      position: absolute;
      bottom: initial;
      top: 50px;
      img{
        width: 110px;
        height: 110px;
      }
      .edit-icon{
        font-size: 50px;
        position: absolute;
        margin-left: 30px;
        bottom: 30%;
      }
    }

    .lock-icon{
      padding: 2px;
      font-size: 26px;
      margin-left: 125px;
      position: absolute;
      bottom: initial;
      top: 100px;
    }.lock-icon:hover{
      font-size: 30px;
      bottom: initial;
      margin-left: 125px;
    }

      .user-info{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      padding-top: 90px;
      .user-data{
        margin-left: auto;
        margin-right: auto;
        width: 95vw;
      }
      h1{
        line-height: 5rem;
        font-size: 5rem;
      }
      p{
        font-size: 2rem;
        padding-top: 3rem;
      }

      .collection-info{
        display: none;
      }
    }
  }

  @media screen and (max-width: 368px){
    .info-bar{
      height: 70px;

      .info-text{
        font-size: 25px;
      }

      .icons-area{
        font-size: 35px;
        .color-icon{
          margin-right: 0.5rem;
        }
      }
    }

      .profile-photo{
      margin-left: 34%;
      position: absolute;
      bottom: initial;
      top: 48px;
      .edit-icon{
        margin-left: 30px;
      }
    }

    .lock-icon{
      font-size: 26px;
      margin-left: 100px;
    }.lock-icon:hover{
      font-size: 30px;
      margin-left: 125px;
    }

      .user-info{
      padding-top: 90px;
      .user-data{
        margin-left: auto;
        margin-right: auto;
        width: 95vw;
      }
      h1{
        line-height: 4rem;
        font-size: 4rem;
      }
      p{
        font-size: 1.6rem;
        padding-top: 3rem;
      }

      .collection-info{
        display: none;
      }
    }
  }

`;

export const FavoritesContainer = styled.section`
  background: #F2F4F3;
    padding: 10vh 0;
    min-height: 100vh;
`;

export const Paintings = styled.div`
    width: 90vw;
    margin: auto;
    padding-top: 10vh;

    .search-filters {
        display: flex;
        justify-content: space-between;
        margin: 0 5vw;
        align-items: flex-start;

        @media (max-width: 768px){
            margin: 0;
        }

        @media (max-width: 540px){
            flex-direction: column;
            align-items: center;
            gap: 5vh
        }
    }
`

export const Line = styled.hr`
    width: 70rem;
    border: unset;
    border-top: .15rem solid #c1c3c2;
    margin: auto;
    max-width: 90vw;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2vh auto;
`
export const ModalContainer = styled.div`
  min-width: min-content;
  min-height: fit-content;
  background-color: white;
  border-width: thin;
  border-radius: 50px 50px 50px 50px;
  padding: 2rem;
  @media screen and (max-width: 450px){
    width: 90vw;
    padding: 1rem;
  }
`;
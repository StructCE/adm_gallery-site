import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto';
  font-size: 1.1rem;
  text-align: center;
  padding: 3vw 7vw 3vw 7vw;
  background-color: var(--Cultured);
  color: black;

  hr{
    margin-bottom: 1vh;
  }

  a{
    color: black;
  }a:hover{
    color: grey;
  }

  .copyright{
    float: left;
  }

  .github{
    float: right;
  }

  .attributions{
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 700px) and (orientation: portrait){
    font-size: 1rem;

    span{
      margin-top: 2vw;;
    }

    .copyright{
      float: initial;
    }

    .github{
      float: initial;
    }
  }

`;
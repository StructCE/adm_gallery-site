import styled from 'styled-components'

export const Container = styled.div`
    height: 2rem;
    width: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .1rem solid rgba(196, 195, 196, 0.5);
    padding: 0 .5rem;

    input {
        font-size: 1.1rem;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        background: inherit;
        color: #A9927D;
    }

    input::placeholder {
        color: #c4c4c4;
    }

    .icon {
        transform: rotateY(180deg);
        color: #c4c4c4;
    }


    @media (max-width: 768px){
        width: 16rem;
        input {
            font-size: .9rem;
        }
    }

    @media (max-width: 540px){
        width: 90vw;

        input {
            font-size: 1.1rem;
        }
    }
`
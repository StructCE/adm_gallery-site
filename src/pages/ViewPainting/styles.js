import styled from "styled-components";

export const Container = styled.section`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100vh;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const FirstScreen = styled.div`

    height: 100vh;
    background-color: #5E503F;
    color: #F2F4FE;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
    text-align: center;
    position: relative;
    scroll-snap-align: start;

    h1, h3 {
        font-style: italic;
    }

    h1 {
        font-size: 7.5rem;
    }

    h3 {
        font-size: 3rem;
        font-weight: normal;
    }

    .year {
        align-self: flex-end;
        margin-right: 15vw;
        margin-top: -2rem;
    }

    .the-painting {
        padding-top: 5vh;
        display: flex;
        margin: 0 3vw;
        width: 90%;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        height: 70vh;

        .image-container {
            align-self: flex-start;
            display: flex;
            justify-content: center;
            flex: 2;
            height: 80%;
            width: 5rem;

        }

        .about {
            display: flex;
            flex-direction: column;
            gap: 5rem;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 3rem 0;
            flex: 1;

            p {
                font-size: 1.75rem;
                display: flex;
                gap: .25rem
            }

            span {
                cursor: pointer;
                display: flex;
                align-items: center;
            }
        }

        img {
            object-fit: contain;
            max-width: 100%;
            max-height: 100%;
        }
    }

    .bottom {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        width: 98vw;
        justify-content: center;
        margin: auto;
        font-size: 1.5rem;
        color: #A9927D;

        .previous {
            position: absolute;
            left: 0;
            display: flex;
            align-items: center;
            margin-bottom: 3rem;
            cursor: pointer;
            opacity: .5;
            transition: .2s ease-in;

            img {
                transform: rotate(180deg);
                height: 3rem;
            }

            :hover {
                opacity: 1;
            }
        }

        h5 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-self: center;
            font-size: 1.75rem;
            font-weight: normal;
            opacity: .5;
            transition: .2s ease-in;

            :hover {
                cursor: pointer;
                opacity: 1;
            }
        }

        .next {
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
            margin-bottom: 3rem;
            cursor: pointer;
            opacity: .5;
            transition: .2s ease-in;

            img {
                height: 3rem;
            }

            :hover {
                opacity: 1;
            }
        }
    }

`

export const SecondScreen = styled.div`
    height: 100vh;
    background-color: #A9927D;
    color: #F2F4FE;
    position: relative;
    scroll-snap-align: start;

      
    p { font-size: 2.25rem; }

    .top {
        display: flex;
        padding-top: 3rem;
        margin: 0 8vw;
        

        .left {
        height: 75vh;
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-right: 10%;
        
            .image-container {
                width: 90%;
                height: 60%;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 0;
                }
            }

            p {
                width: 90%;
                font-size: 2rem;
            }

            .artist-btn {
                width: 80%;
                button {
                    height: unset;
                    font-size: 1.5rem;
                    color: #0A2463;
                    background-color: transparent;
                    padding: .6rem;
                    border: 2px solid #0A2463;
                    transition: .4s ease;

                    :hover {
                        background-color: #0A2463;
                        color: #F2F4FE;
                        cursor: pointer;
                    }
                }
            }
    }

        .right {
            flex: 3;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: 75vh;

            .description {
                height: 34%;
                overflow-y: auto;
                display: flex;
                align-items: center;
            }

            span {
                font-size: 1.75rem;
            }

            .image-container {
                align-self: center;
                width: 75%;
                height: 50%;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
    }

    .about-style {
        overflow: auto;
        width: 75%;
        margin: auto;
        height: 15vh;
        font-size: 2rem;
    }

    .bottom {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        width: 98vw;
        justify-content: center;
        margin: auto;
        color: #6F1D1B;
        margin: 0 1vw;

        p {font-size: 1.5rem}

        .previous {
            position: absolute;
            left: 0;
            display: flex;
            align-items: center;
            cursor: pointer;
            opacity: .5;
            transition: .2s ease-in;

            img {
                transform: rotate(180deg);
                height: 3rem;
            }

            :hover {
                opacity: 1;
            }
        }

        .next {
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
            cursor: pointer;
            opacity: .5;
            transition: .2s ease-in;

            img {
                height: 3rem;
            }

            :hover {
                opacity: 1;
            }
        }
    }

`
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

    @media screen and (max-width: 992px) {
        scroll-snap-type: unset;
        height: auto;
    }

    .form-buttons{
        position: fixed;
        bottom:0;
        left: 0;
        margin: 1rem;
    }
`

export const FirstScreen = styled.div`

    height: 100vh;
    background-color: #5E503F;
    color: #F2F4FE;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 5vh;
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
            max-width: 30vw;

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
            max-width: 30vw;


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
            max-width: 30vw;

            img {
                height: 3rem;
            }

            :hover {
                opacity: 1;
            }
        }
    }


    @media screen and (max-height: 992px){
        .the-painting .about { gap: 1rem } 
    }

    @media screen and (max-height: 768px){
        .the-painting .image-container{
            height: 30vh;
            width: 100%;
        }
    }

    @media screen and (max-width: 1440px) {
        h1{font-size: 5rem}
    }

    @media screen and (max-width: 768px) {
        h1{font-size: 4rem}

        h3{font-size: 2.5rem}

        .year{margin-top: unset}

        .the-painting .about p {font-size: 1.3rem}

        .bottom .next, .bottom .previous {margin-bottom: .5rem}
    }

    @media screen and (max-width: 540px) {

        ::-webkit-scrollbar {
            display: none;
        }

        h1{font-size: 2.5rem;}

        h3{font-size: 1.3rem}

        .the-painting .about {
            padding: 0;
            gap: .5rem;

            p {font-size: 1rem}
        }
        .bottom {
            font-size: 1rem;

            h5 {font-size: 1.1rem}
        }

        .the-painting {
            flex-direction: column;
            
            .image-container {
                align-self: center;
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 380px) {
        .bottom p {display: none}
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
        height: 73vh;
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
                width: 100%;
                font-size: 2rem;
            }

            .artist-btn {
                width: 100%;
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
            height: 73vh;

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
        width: 65%;
        margin: 2vh auto 0;
        height: 15vh;

        p {
            font-size: 2rem;
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
            max-width: 40vw;
            
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
            max-width: 45vw;

            p{
                text-align: end;
            }
            
            img {
                height: 3rem;
            }

            :hover {
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 1440px) {
        p { font-size: 1.5rem }

        .top {
            margin: 0 1vw;
        
            .left {
                margin-right: 1rem;

                .image-container {
                    width: 100%;
                }

                p {
                font-size: 1.25rem;
                }

                .artist-btn button {
                    font-size: 1rem;
                }
            }
        }

        .about-style p {
            font-size: 1.25rem;
        }
    }

    @media screen and (max-width: 992px){
        height: auto;
        padding-bottom: 8vh;
        
        .top {
            flex-direction: column;

            .right {
                align-items: center;
                padding-top: 5vh;

                .description { 
                    justify-content: center;
                
                    p {
                        text-align: center;
                    }
                }

                .image-container {
                    max-height: 60vh;
                }

                span {
                    text-align: center;
                }
            }

            .left {                                
                .image-container {
                    max-height: 70vh;
                    width: 60vw;
                }
                .artist-btn {
                    button {
                        width: 60%;
                    }
                }
            }
        }

        .about-style {
            text-align: center;
            width: 90%;
            height: 12vh;
        }
    }

    @media screen and (max-width: 540px) {
        .bottom p { font-size: 1rem }
    }

    @media screen and (max-width: 380px) {
        .bottom p { display: none }
    }

`
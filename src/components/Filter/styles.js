import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    color: #A9927D;
    min-height: 2rem;
    margin-bottom: 6rem;

    .select-filter {

        position: relative;

        .selected {
            display: flex;
            gap: .3rem;
            border: 2px solid #6F1D1B;
            border-radius: 1rem;
            align-items: center;
            color: #6F1D1B;
            padding: .7rem .3rem;
            height: 1.2rem;
            transition: .4s ease;
        }

        .selected-and-list {
            border-radius: 1rem 1rem 0 0;
        }

        .options {
            position: absolute;
            list-style: none;
            width: 100%;
            text-align: center;
            border: 2px solid #A9927D;
            max-height: 6rem;
            overflow: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
            transition: 1s ease;

            ::-webkit-scrollbar {
                display: none;
            }

            li {
                background: transparent;
                color: #6F1D1B;
                width: 100%;
                padding: 0;
                transition: .2s ease-in;
                font-size: .9rem;

                :nth-child(odd) {
                    background: #A9927D;
                }

                :hover {
                    background: #6F1D1B;
                    color: #F2F4F3;
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 768px){
        font-size: .9rem;

        .selected{
            font-size: .9rem;
        }

        .select-filter .options li {
            font-size: .8rem;
        }
    }

    @media (max-width: 540px){
        font-size: 1.1rem;

        .selected{
            font-size: 1rem;
        }

        .select-filter .options li {
            font-size: .9rem;
        }
    }
`

export const ArrowIcon = styled.button`
    background: transparent;
    border: none;
    display: flex;
    color: #6F1D1B;
    cursor: pointer;
    

    .arrow { 
        transition: transform .4s ease-in-out;
    }

    .rotated-arrow {
        transform: rotate(90deg);
        text-align: center;
    }
`
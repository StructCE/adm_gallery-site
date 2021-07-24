import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Playfair Display', serif;
        overflow-x: hidden;
    }
    h1 {
        margin: 0;
    }
`;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --RoyalBlue: #0A2463;
        --Cultured: #F2F4F3;
        --Grullo: #A9927D;
        --Umber: #5E503F;
        --PerisanPlum: #6F1D1B
    }

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
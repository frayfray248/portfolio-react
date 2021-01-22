import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html, body {
        height: 100%;  
    }

    #root {
        height: 100%;
    }

    .my-box-shadow {
        box-shadow: 5px 5px 4px black;
    }

`

export default GlobalStyle;
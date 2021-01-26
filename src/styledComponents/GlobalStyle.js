import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html, body {
        height: 100%;  
    }

    a {
        color: orange;
    }
    
    a:hover {
        color: purple;
    }

    #root {
        height: 100%;
    }

    .my-box-shadow {
        box-shadow: 5px 5px 4px black;
    }

    .active {
        font-weight: bold;
        color: orange!important;
    }

`

export default GlobalStyle;
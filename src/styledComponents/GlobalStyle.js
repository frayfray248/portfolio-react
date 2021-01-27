import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html {
        height: -webkit-fill-available;  
    }

    body {
        min-height: 100vh;
        min-height: -webkit-fill-available;
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
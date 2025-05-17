import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    // import the pp font
    @font-face {
        font-family: "ppFont";
        src: url('/fonts/pp.otf')
    }
    
    // import the dm font
    @font-face {
        font-family: "dmFont";
        src: url('/fonts/dm.ttf')
    }

    body {
        font-family: ppFont;
        background-color: #e4e4e4;
        padding: 50px;
        text-align: start;
    }
`;


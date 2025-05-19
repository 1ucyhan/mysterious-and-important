import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    // CSS variables?
    :root {
        --mysterious-black: #151515;
        --important-gray: #E4E4E4;
    }

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
        background-color: var(--important-gray);
        padding: 50px;
        text-align: start;
    }
`;


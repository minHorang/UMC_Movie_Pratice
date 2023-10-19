import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: sans-serif;
    }
    body{
        margin : 0;
        background-color: #26088a;
        height: 100%;
        width: 100vw;
    }
`;

export default GlobalStyle;
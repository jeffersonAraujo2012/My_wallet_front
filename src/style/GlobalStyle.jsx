import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
  }

  .root {
    position: relative;
    background-color: #8C11BE;
    padding: 24px 24px 16px;
    height: 100%;
    min-height: 100%;
  }
  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  
`;

export default GlobalStyle;

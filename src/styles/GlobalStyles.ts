import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #191919;
    color: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  h1, h2 , h3 , p {
    margin:0;
    padding: 0;
  }
`;

export default GlobalStyle;

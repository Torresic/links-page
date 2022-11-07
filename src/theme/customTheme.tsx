import { createGlobalStyle } from "styled-components";

export const CustomTheme = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'lato', sans-serif;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    height: 100%;
    isolation: isolate;
  }
`;

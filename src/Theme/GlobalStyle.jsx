import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'inter', sans-serif;
    font-size: 18px;
    height: 101vh;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    transition: 0.2s ease;
    outline: none;
    border: none;
  }
`

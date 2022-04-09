import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
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
  ::-webkit-scrollbar {
    width: 10px;
  }

/* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px #96b6fa; 
    border-radius: 10px;
  }
 
/* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1e88e5; 
    border-radius: 10px;
  }

/* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1b79cc; 
  }
`

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::before,::after{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html{
    font-size: 62.5%;
    @media screen and (min-width:480px){
      font-size:68%;
    }
  }

  body{
    height: 100vh;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.4)
    ),
    url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }

`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    .html{
      @media (max-width: 1700px) {
         font-size: 75px;
      }
      @media (max-width:1200px) {
        
      }
    }

  body{
    background:#1b1b1b;
    overflow-x: hidden;
  }

  button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border:3px solid #23d997;
    background: transparent;
    color:white;
    transition:all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color:white;
    }

  }

  h3{
        color:white;
    }
    h2{
      font-size: 40px;
    }
    p{
        padding:3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    h4{
        font-weight: bold;
         
    }
    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: bold;
        color:#23d997
    }
`;

export default GlobalStyle;

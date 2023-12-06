import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle `
  html {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    font-family: "Poppins", sans-serif;
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.lightGrey};
    display: grid;
    place-items: center;
  }
`;

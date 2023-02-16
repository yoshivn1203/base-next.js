import { createGlobalStyle, css } from 'styled-components';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default GlobalStyle;

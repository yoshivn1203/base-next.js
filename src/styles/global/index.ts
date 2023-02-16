import { createGlobalStyle, css } from 'styled-components';

import utility from './utility';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${utility}
`;

export default GlobalStyle;

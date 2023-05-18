// Core
import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    min-height: 100%;
    font-size: 16px;
  }
  
  #root {
    height: 100%;
  }
`;

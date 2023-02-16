import 'styled-components';

import colors from './colors';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import breakpoints from './breakpoints';

export const themeDefault = {
  colors,
  fontSize,
  fontWeight,
  breakpoints,
} as const;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    breakpoints: typeof breakpoints;
  }
}

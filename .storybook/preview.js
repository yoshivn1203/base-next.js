import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { theme } from '../src/styles/theme';
import './reset.css';

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme.main]));

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   viewMode: 'docs',
// };

import GlobalStyles from '../src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  ),
];

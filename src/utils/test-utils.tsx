import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

interface Props {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

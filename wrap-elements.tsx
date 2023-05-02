import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './src/components/organisms/Layout';
import GlobalStyle from './src/theme/GlobalStyle';
import theme from 'src/theme/theme';

interface Props {
  element: React.ReactNode;
}

const RootWrapper = ({ element }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);

const PageWrapper = ({ element }: Props) => {
  return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }: Props) => (
  <RootWrapper element={element} />
);

export const wrapPageElement = ({ element }: Props) => {
  return <PageWrapper element={element} />;
};

import React from 'react';
import Header from 'src/components/molecules/Header';
import GlobalStyles from 'src/theme/GlobalStyle';
import { Wrapper, LayoutWrapper } from './Layout.styles';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <LayoutWrapper>
      <Header />
      <GlobalStyles />
      <Wrapper>{children}</Wrapper>
    </LayoutWrapper>
  );
}

export default Layout;

import React from 'react';
import Header from 'src/components/molecules/Header';
import GlobalStyles from 'src/theme/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`;

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

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

import React from 'react';
import GlobalStyles from 'src/theme/GlobalStyle';
import styled from 'styled-components';

const Wrapper = styled.div`
  // font-family: ${({ theme }) => theme.fonts.body};
  // color: ${({ theme }) => theme.colors.text};
  // background-color: ${({ theme }) => theme.colors.background};
`;

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default Layout;

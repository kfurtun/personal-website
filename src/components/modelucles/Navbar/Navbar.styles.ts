import { InternalLink } from 'components/atoms/Link';
import { mediaQueries } from 'src/theme/mediaQueries';
import pxToRem from 'src/theme/pxToRem';
import styled, { keyframes } from 'styled-components';

interface MenuBarProps {
  state: 'closed' | 'closing' | 'open';
}

const slideDown = keyframes`
0% {
  transform:translateY(-100%)

}
100% {
  transform:translateY(0)
}
`;

const slideUp = keyframes`
0% {
  transform:translateY(0);
}
100% {
  transform:translateY(-100%);
}
`;

export const Wrapper = styled.nav``;

export const StyledLink = styled(InternalLink)`
  color: ${({ theme }) => theme.colors.black1};
  font-weight: 200;
  text-transform: uppercase;
  font-size: ${pxToRem(30)};

  ${mediaQueries.medium} {
    font-size: ${pxToRem(18)};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue2};
  }
`;

export const NavbarWrapper = styled.div`
  gap: ${pxToRem(20)};
  align-items: center;
  display: none;

  ${mediaQueries.medium} {
    display: flex;
  }
`;

export const MenuBar = styled.div<MenuBarProps>`
  display: ${({ state }) => (state !== 'closed' ? 'block' : 'none')};

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.beige1};

  animation: ${({ state }) => (state === 'open' ? slideDown : slideUp)} 0.5s
    ease forwards;
`;

export const MenuBarButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  display: flex;

  ${mediaQueries.medium} {
    display: none;
  }
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: ${pxToRem(20)} ${pxToRem(20)} 0 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: ${pxToRem(-56)};
  gap: ${pxToRem(40)};
`;

import styled from 'styled-components';
import { InternalLink } from 'components/atoms/Link';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: ${({ theme }) =>
    `linear-gradient(to left, ${theme.colors.white1} 60%, ${theme.colors.beige2} 40%)`};

  ${mediaQueries.medium} {
    // padding: ${pxToRem(100)};
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(48)};
`;

export const StyledInternalLink = styled(InternalLink)`
  display: flex;
  align-items: center;
  gap: ${pxToRem(5)};

  h3:nth-of-type(1) {
  }

  h3:nth-of-type(2) {
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: ${pxToRem(1.6)};
  }
`;

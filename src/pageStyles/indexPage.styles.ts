import styled from 'styled-components';
import { InternalLink } from 'components/atoms/Link';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${pxToRem(30)};
  height: 110%;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.white1} 20%,${theme.colors.beige2} 20%, ${theme.colors.beige2} 80%)`};

  ${mediaQueries.medium} {
    flex-direction: row;
    justify-content: center;
    height: 100%;
    background-image: ${({ theme }) =>
      `linear-gradient(to left, ${theme.colors.white1} 60%, ${theme.colors.beige2} 40%)`};
  }
`;

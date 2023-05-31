import styled from 'styled-components';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${pxToRem(30)};
  height: 100%;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.white1} 20%,${theme.colors.beige2} 20%, ${theme.colors.beige2} 80%)`};
  padding-bottom: 10%;

  ${mediaQueries.medium} {
    flex-direction: row;
    justify-content: center;
    height: 100%;
    background-image: ${({ theme }) =>
      `linear-gradient(to left, ${theme.colors.white1} 60%, ${theme.colors.beige2} 40%)`};
    padding-bottom: unset;
  }
`;

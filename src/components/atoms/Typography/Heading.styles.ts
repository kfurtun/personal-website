import styled from 'styled-components';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';

interface BaseProps {
  tagName: string;
}
export const Base = styled.h1<BaseProps>`
  color: ${({ theme }) => theme.colors.black1};
  font-size: ${({ theme, tagName }) =>
    pxToRem(theme.fontSizes[tagName].medium)};
  white-space: pre-wrap;

  ${mediaQueries.medium} {
    font-size: ${({ theme, tagName }) =>
      pxToRem(theme.fontSizes[tagName].large)};
  }
`;

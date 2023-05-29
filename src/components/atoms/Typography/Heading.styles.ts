import styled from 'styled-components';
import pxToRem from 'src/theme/pxToRem';

interface BaseProps {
  tagName: string;
}
export const Base = styled.h1<BaseProps>`
  color: ${({ theme }) => theme.colors.black1};
  font-size: ${({ theme, tagName }) => pxToRem(theme.fontSizes[tagName])};
`;

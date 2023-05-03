import styled from 'styled-components';
import pxToRem from 'src/theme/pxToRem';

interface BaseProps {
  color?: string;
  fontSize?: number;
  tagName: string;
}
export const Base = styled.h1<BaseProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black1};
  font-size: ${({ theme, fontSize, tagName }) =>
    fontSize ? pxToRem(fontSize) : pxToRem(theme.fontSizes[tagName])};
`;

import styled from 'styled-components';
import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';

interface StyledButtonProps {
  primary: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${pxToRem(120)};
  height: ${pxToRem(30)};
  border-radius: ${pxToRem(20)};
  font-size: ${pxToRem(12)};
  text-transform: uppercase;

  border: ${({ theme, primary }) => {
    if (primary) return 'none';
    return `${pxToRem(2)} solid ${theme.colors.black1}`;
  }};

  ${({ theme, primary }) => `
    background: ${primary ? theme.colors.blue1 : theme.colors.white1};
    color: ${primary ? theme.colors.white2 : theme.colors.black1};
  `};

  ${mediaQueries.medium} {
    font-size: ${pxToRem(14)};
    width: ${pxToRem(130)};
    height: ${pxToRem(35)};
  }

  &:hover {
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in;

    border: ${({ theme, primary }) => {
      if (primary) return `${pxToRem(2)} solid ${theme.colors.blue1}`;
      return 'none';
    }};

    ${({ theme, primary }) => `
    background:${primary ? theme.colors.white1 : theme.colors.blue1};
    color:${primary ? theme.colors.black1 : theme.colors.white1}
    `};
  }
`;

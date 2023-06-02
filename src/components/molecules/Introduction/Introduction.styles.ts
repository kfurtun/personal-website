import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';
import styled from 'styled-components';
import { H3 } from 'atoms/Typography';
import { InternalLink } from 'atoms/Link';

interface InternalLinkProps {
  primary: boolean | undefined;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: ${pxToRem(280)};
  gap: ${pxToRem(20)};

  ${mediaQueries.medium} {
    width: ${pxToRem(400)};
    height: ${pxToRem(526)};
    padding: 0 ${pxToRem(20)};
  }
`;

export const StyledH3 = styled(H3)`
  font-weight: 500;
`;

export const LinkWrapper = styled.div`
  display: none;

  ${mediaQueries.medium} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${pxToRem(10)};
  }
`;

export const StyledInternalLink = styled(InternalLink)<InternalLinkProps>`
  width: ${pxToRem(120)};
  height: ${pxToRem(30)};
  border-radius: ${pxToRem(20)};
  font-size: ${pxToRem(12)};
  text-transform: uppercase;
  text-decoration: none;
  padding: ${pxToRem(4)} ${pxToRem(10)};
  display: flex;
  align-items: center;
  justify-content: center;

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
  }
`;

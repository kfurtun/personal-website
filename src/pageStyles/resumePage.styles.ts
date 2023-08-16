import styled from 'styled-components';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';
import { H1, H3 } from 'atoms/Typography';
import { StyledInternalLink as _StyledInternalLink } from 'molecules/Introduction/Introduction.styles';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${pxToRem(30)};
  min-height: 100%;
  background: ${({ theme }) => theme.colors.beige2};
  padding-bottom: 5%;

  ${mediaQueries.medium} {
    justify-content: center;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(6)};
  margin-top: ${pxToRem(30)};
`;
export const Title = styled(H1)`
  font-size: ${pxToRem(36)};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: ${pxToRem(320)};
  gap: ${pxToRem(40)};

  ${mediaQueries.medium} {
    width: ${pxToRem(724)};
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SectionHeader = styled(H3)`
  font-weight: bold;
`;

export const StyledDownloadLink = styled.a`
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
  transition: color 0.3s ease-in, background-color 0.3s ease-in;
  border: none;

  ${({ theme }) => `
background: ${theme.colors.blue1};
color: ${theme.colors.white2};
`};

  ${mediaQueries.medium} {
    font-size: ${pxToRem(14)};
    width: ${pxToRem(130)};
    height: ${pxToRem(35)};

    &:hover {
      transition: background-color 0.5s ease-in-out, color 0.5s ease-in;

      border: ${({ theme }) => `${pxToRem(2)} solid ${theme.colors.blue1}`};

      ${({ theme }) => `
    background:${theme.colors.white1};
    color:${theme.colors.black1}
    `};
    }
  }
`;

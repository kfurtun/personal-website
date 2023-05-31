import { mediaQueries } from 'src/theme/mediaQueries';
import { H2, H3 } from 'atoms/Typography';
import pxToRem from 'theme/pxToRem';
import styled from 'styled-components';
import { StyledInternalLink as _StyledInternalLink } from 'molecules/Introduction/Introduction.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.beige1};
  border-radius: 2px;
  box-shadow: -6px 6px 8px rgba(0, 0, 0, 0.2);
  width: ${pxToRem(280)};
  height: ${pxToRem(376)};

  ${mediaQueries.medium} {
    width: ${pxToRem(376)};
    height: ${pxToRem(526)};
  }
`;

export const ImageWrapper = styled.div`
  width: ${pxToRem(130)};
  height: ${pxToRem(130)};
  margin-top: ${pxToRem(30)};

  ${mediaQueries.medium} {
    width: ${pxToRem(220)};
    height: ${pxToRem(220)};
  }
`;

export const Name = styled(H2)`
  white-space: pre-wrap;
  text-align: center;
  font-size: ${pxToRem(24)};
`;

export const Title = styled(H3)`
  display: none;
  text-transform: uppercase;
  font-size: ${pxToRem(18)};
  font-weight: 100;
  letter-spacing: ${pxToRem(2)};

  ${mediaQueries.medium} {
    display: block;
  }
`;

export const Icons = styled.div`
  width: 100%;
  height: ${pxToRem(54)};
  background: ${({ theme }) => theme.colors.white1};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(40)};
`;

export const VerticalLine = styled.div`
  height: ${pxToRem(6)};
  width: 15%;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, transparent 50%, ${theme.colors.blue1} 50%);`};
`;

export const NameTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(20)};
  margin-bottom: ${pxToRem(10)};
  width: 100%;

  ${mediaQueries.medium} {
    margin-bottom: ${pxToRem(40)};
    gap: ${pxToRem(30)};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(10)};
  width: 100%;

  ${mediaQueries.medium} {
    display: none;
    justify-content: space-around;
  }
`;

export const StyledInternalLink = styled(_StyledInternalLink)``;

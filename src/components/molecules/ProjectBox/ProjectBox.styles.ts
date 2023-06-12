import styled from 'styled-components';
import pxToRem from 'theme/pxToRem';
import { mediaQueries } from 'theme/mediaQueries';
import { H2, H3 } from 'src/components/atoms/Typography';

interface WrapperProps {
  img: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  background: ${({ theme }) => theme.colors.white1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  box-shadow: -6px 6px 8px rgba(0, 0, 0, 0.2);

  ${mediaQueries.medium} {
    gap: ${pxToRem(20)};
    flex-direction: row;
    width: ${pxToRem(724)};
    min-height:${(img) => (img ? pxToRem(368) : pxToRem(500))};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: ${pxToRem(20)} ${pxToRem(30)};
  gap: ${pxToRem(20)};

  ${mediaQueries.medium} {
    flex-grow: 0.6;
    padding: ${pxToRem(30)} ${pxToRem(40)};
  }
`;

export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${pxToRem(6)};
  position: relative;
`;

export const StyledH2 = styled(H2)`
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.colors.blue1};

  ${mediaQueries.medium} {
    font-size: ${pxToRem(20)};
  }
`;

export const StyledH3 = styled(H3)`
  font-size: ${pxToRem(12)};
  font-weight: 600;
  ${mediaQueries.medium} {
    font-size: ${pxToRem(14)};
  }
`;

export const ProjectHeaderIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${pxToRem(10)};
  height: 100%;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: ${pxToRem(-30)};
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue1};

    ${mediaQueries.medium} {
      left: ${pxToRem(-40)};
    }
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.blue1};
  display: none;

  ${mediaQueries.medium} {
    border-left: 1px solid ${({ theme }) => theme.colors.blue1};
    border-top: none;
    min-height: ${pxToRem(500)};
    display: block;

    div:first-child {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  alig-items: center;
  justify-content: center;
  gap: ${pxToRem(40)};
`;

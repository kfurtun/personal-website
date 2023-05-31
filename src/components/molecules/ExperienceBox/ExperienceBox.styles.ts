import { H3, P } from 'components/atoms/Typography';
import { mediaQueries } from 'theme/mediaQueries';
import pxToRem from 'theme/pxToRem';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${mediaQueries.medium} {
    width: ${pxToRem(724)};
    height: ${pxToRem(368)};
    padding: ${pxToRem(40)} ${pxToRem(60)};
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  gap: ${pxToRem(10)};
  width: 50%;
`;

export const RightContainer = styled(LeftContainer)``;

export const Date = styled(H3)`
  color: ${({ theme }) => theme.colors.blue1};

  ${mediaQueries.medium} {
    font-size: ${pxToRem(20)};
  }
`;

export const Position = styled(P)`
  text-transform: uppercase;
  font-size: ${pxToRem(18)};
`;

export const CompanyInfo = styled(P)`
  font-size: ${pxToRem(14)};
`;

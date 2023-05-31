import styled from 'styled-components';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';
import { H1 } from 'atoms/Typography';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${pxToRem(30)};
  height: 100%;
  background: ${({ theme }) => theme.colors.beige2};
  padding-bottom: 10%;

  ${mediaQueries.medium} {
    justify-content: center;
    height: 100%;
    padding-bottom: unset;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(6)};
`;
export const Title = styled(H1)`
  font-size: ${pxToRem(36)};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQueries.medium} {
    width: ${pxToRem(724)};
  }
`;

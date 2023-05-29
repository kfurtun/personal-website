import styled from 'styled-components';
import { InternalLink } from 'components/atoms/Link';
import pxToRem from 'theme/pxToRem';
import { H3 } from 'components/atoms/Typography';
import { mediaQueries } from 'src/theme/mediaQueries';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(32)} ${pxToRem(24)};
  width: 100%;

  ${mediaQueries.medium} {
    padding: ${pxToRem(48)} ${pxToRem(60)};
  }
`;

export const StyledInternalLink = styled(InternalLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: ${pxToRem(10)};

  ${mediaQueries.large} {
    flex-direction: row;
    gap: ${pxToRem(5)};
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: ${pxToRem(10)};

  ${mediaQueries.large} {
    width: auto;
    gap: ${pxToRem(5)};
  }
`;

export const Position = styled(H3)`
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: ${pxToRem(1.6)};
  font-size: ${pxToRem(14)};

  display: flex;
  align-items: center;
  gap: ${pxToRem(5)};

  ${mediaQueries.medium} {
    font-size: ${pxToRem(18)};
  }

  ${mediaQueries.large} {
    &::before {
      content: '/';
    }
  }
`;

export const Name = styled(H3)`
  font-size: ${pxToRem(20)};

  ${mediaQueries.medium} {
    font-size: ${pxToRem(24)};
  }
`;

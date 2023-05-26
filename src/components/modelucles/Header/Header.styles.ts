import styled from 'styled-components';
import { InternalLink } from 'components/atoms/Link';
import pxToRem from 'theme/pxToRem';
import { H3 } from 'components/atoms/Typography';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(48)} ${pxToRem(60)};
`;

export const StyledInternalLink = styled(InternalLink)`
  display: flex;
  align-items: center;
  gap: ${pxToRem(5)};
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(5)};
`;

export const StyledH3 = styled(H3)`
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: ${pxToRem(1.6)};

  display: flex;
  align-items: center;
  gap: ${pxToRem(5)};

  &::before {
    content: '/';
  }
`;

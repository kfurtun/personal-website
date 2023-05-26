import styled from 'styled-components';
import { InternalLink } from 'components/atoms/Link';
import pxToRem from 'src/theme/pxToRem';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(48)};
`;

export const StyledInternalLink = styled(InternalLink)`
  display: flex;
  align-items: center;
  gap: ${pxToRem(5)};

  h3:nth-of-type(1) {
  }

  h3:nth-of-type(2) {
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: ${pxToRem(1.6)};
  }
`;

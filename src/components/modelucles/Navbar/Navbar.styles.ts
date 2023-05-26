import { InternalLink } from 'components/atoms/Link';
import pxToRem from 'src/theme/pxToRem';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  gap: ${pxToRem(20)};
  align-items: center;
`;

export const StyledLink = styled(InternalLink)`
  color: ${({ theme }) => theme.colors.black1};
  font-weight: 200;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.colors.blue2};
  }
`;

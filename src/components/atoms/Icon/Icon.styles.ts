import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pxToRem from 'src/theme/pxToRem';
import styled from 'styled-components';

interface StyledIconProps {
  color: string;
  fontSize?: number;
}

export const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? pxToRem(fontSize) : pxToRem(theme.fontSizes.icon)};
`;

import React from 'react';
import { StyledIcon } from './Icon.styles';
import { IconProps } from 'models/atoms/icon';

function Icon({ icon, color, fontSize }: IconProps) {
  return <StyledIcon icon={icon} color={color} fontSize={fontSize} />;
}

export default Icon;

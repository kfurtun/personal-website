import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H3({
  fontSize,
  color,
  text,
  className,
}: TypographyProps): JSX.Element {
  return (
    <Base
      fontSize={fontSize}
      color={color}
      className={className}
      as="h3"
      tagName="h3"
    >
      {text}
    </Base>
  );
}

export default H3;

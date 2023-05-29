import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H3({ text, className }: TypographyProps) {
  return (
    <Base className={className} as="h3" tagName="h3">
      {text}
    </Base>
  );
}

export default H3;

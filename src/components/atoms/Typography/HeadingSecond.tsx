import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H2({ text, className }: TypographyProps): JSX.Element {
  return (
    <Base as="h2" tagName="h2" className={className}>
      {text}
    </Base>
  );
}

export default H2;

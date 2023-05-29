import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H2({ text }: TypographyProps): JSX.Element {
  return (
    <Base as="h2" tagName="h2">
      {text}
    </Base>
  );
}

export default H2;

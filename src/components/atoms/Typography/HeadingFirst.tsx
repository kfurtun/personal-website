import React from 'react';
import { TypographyProps } from 'src/models/atoms/typography';
import { Base } from './Heading.styles';

function H1({ text }: TypographyProps): JSX.Element {
  return <Base tagName="h1">{text}</Base>;
}

export default H1;

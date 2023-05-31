import React from 'react';
import {
  Wrapper,
  StyledH3,
  LinkWrapper,
  StyledInternalLink,
} from './Introduction.styles';
import { H1, P } from 'atoms/Typography';
import { IntroductionProps } from 'models/molecules/intorduction';

function Introduction({ data }: IntroductionProps) {
  const { header, intro, buttons, description } = data;
  return (
    <Wrapper>
      <H1 text={header} />
      <StyledH3 text={intro} />
      <LinkWrapper>
        {buttons.map((button) => (
          <StyledInternalLink to={button.path} primary={button.isPrimary}>
            {button.text}
          </StyledInternalLink>
        ))}
      </LinkWrapper>
      <P text={description} />
    </Wrapper>
  );
}

export default Introduction;

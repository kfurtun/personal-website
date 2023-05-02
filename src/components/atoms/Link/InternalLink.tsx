import React from 'react';
import { StyledInternalLink } from 'components/atoms/Link/Link.styles';
import { InternalLinkProps } from 'src/models/atoms/link';

function InternalLink({ text, primary, to }: InternalLinkProps): JSX.Element {
  return (
    <StyledInternalLink primary={primary} to={to}>
      {text}
    </StyledInternalLink>
  );
}

export default InternalLink;

InternalLink.displayName = 'InternalLink';

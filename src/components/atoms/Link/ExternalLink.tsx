import React from 'react';
import { StyledExternalLink } from 'components/atoms/Link/Link.styles';
import { ExternalLinkProps } from 'src/models/atoms/link';

function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <StyledExternalLink href={href} className={className}>
      {children}
    </StyledExternalLink>
  );
}

export default ExternalLink;

ExternalLink.displayName = 'ExternalLink';

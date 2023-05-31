import React from 'react';
import { StyledExternalLink } from 'components/atoms/Link/Link.styles';
import { ExternalLinkProps } from 'src/models/atoms/link';

function ExternalLink({
  href,
  children,
  className,
  target,
}: ExternalLinkProps) {
  return (
    <StyledExternalLink href={href} className={className} target={target}>
      {children}
    </StyledExternalLink>
  );
}

export default ExternalLink;

ExternalLink.displayName = 'ExternalLink';

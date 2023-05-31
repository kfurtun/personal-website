import React from 'react';
import { StyledInternalLink } from 'components/atoms/Link/Link.styles';
import { InternalLinkProps } from 'src/models/atoms/link';

function InternalLink({
  children,
  to,
  className,
  activeStyle,
}: InternalLinkProps) {
  return (
    <StyledInternalLink to={to} className={className} activeStyle={activeStyle}>
      {children}
    </StyledInternalLink>
  );
}

export default InternalLink;

InternalLink.displayName = 'InternalLink';

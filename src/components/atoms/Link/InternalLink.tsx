import React from 'react';
import { StyledInternalLink } from 'components/atoms/Link/Link.styles';
import { InternalLinkProps } from 'src/models/atoms/link';

function InternalLink({
  children,
  primary,
  to,
  className,
  activeStyle,
}: InternalLinkProps): JSX.Element {
  return (
    <StyledInternalLink
      primary={primary}
      to={to}
      className={className}
      activeStyle={activeStyle}
    >
      {children}
    </StyledInternalLink>
  );
}

export default InternalLink;

InternalLink.displayName = 'InternalLink';

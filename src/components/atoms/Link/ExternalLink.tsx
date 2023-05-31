import React from 'react';
import { ExternalLinkProps } from 'src/models/atoms/link';

function ExternalLink({
  href,
  children,
  className,
  target,
}: ExternalLinkProps) {
  return (
    <a href={href} className={className} target={target}>
      {children}
    </a>
  );
}

export default ExternalLink;

ExternalLink.displayName = 'ExternalLink';

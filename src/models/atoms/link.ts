import React from 'react';

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}
export interface InternalLinkProps {
  text: string;
  primary?: boolean;
  to: string;
}

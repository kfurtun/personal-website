import React from 'react';

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
export interface InternalLinkProps {
  children: React.ReactNode;
  primary?: boolean;
  to: string;
  className?: string;
  activeStyle?: ActiveStyle;
}

export interface ActiveStyle {
  [key: string]: string;
}

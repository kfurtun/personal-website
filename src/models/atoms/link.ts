import React from 'react';

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}
export interface InternalLinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  activeStyle?: ActiveStyle;
  onClick?: () => void;
}

export interface ActiveStyle {
  [key: string]: string;
}

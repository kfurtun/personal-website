import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { InternalLink, ExternalLink } from 'components/atoms/Link';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <InternalLink primary={true} text="resume" to="/" />
      <ExternalLink text="resume" href="/" />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

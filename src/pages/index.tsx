import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { InternalLink, ExternalLink } from 'components/atoms/Link';
import { H1, H2, H3, P } from 'components/atoms/Typography';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <InternalLink primary={true} text="resume" to="/" />
      <ExternalLink text="resume" href="/" />
      <H1 text="This is H1" />
      <H2 text="This is H2" />
      <H3 text="This is H3" />
      <P text="This is P" />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

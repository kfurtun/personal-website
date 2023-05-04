import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { InternalLink, ExternalLink } from 'components/atoms/Link';
import { H1, H2, H3, P } from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <InternalLink primary={true} text="resume" to="/" />
      <ExternalLink href="/">resume</ExternalLink>
      <H1 text="This is H1" />
      <H2 text="This is H2" />
      <H3 text="This is H3" />
      <P text="This is P" />
      <ExternalLink href="https://www.github.com">
        <Icon icon={faGithub} color="black1" fontSize={40} />
      </ExternalLink>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

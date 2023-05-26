import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { InternalLink, ExternalLink } from 'components/atoms/Link';
import { H1, H2, H3, P } from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import Image from 'src/components/atoms/Image';
import { graphql } from 'gatsby';
import { DataProps } from 'models/pages/homePage';
import { Header, StyledInternalLink } from 'src/pageStyles/mainPage.styles';
import { queryNormalizer } from 'utils/queryNormalizer';

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const result = queryNormalizer(data, 'mainPage');

  return (
    <>
      {/* <InternalLink primary={true} text="resume" to="/" />
        <ExternalLink href="/">resume</ExternalLink>
        <H1 text="This is H1" />
        <H2 text="This is H2" />
        <H3 text="This is H3" />
        <P text="This is P" />
        <ExternalLink href="https://www.github.com">
          <Icon icon={faGithub} color="black1" fontSize={40} />
        </ExternalLink>
        <Image src={data.allDataJson.edges[0].node.portrait} alt="zaa" /> */}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query HomePageQuery {
    allDataJson {
      edges {
        node {
          mainPage {
            portrait
          }
        }
      }
    }
  }
`;

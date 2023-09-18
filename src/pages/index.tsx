import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { DataProps } from 'models/pages/indexPage';
import { Wrapper } from 'src/pageStyles/indexPage.styles';
import { queryNormalizer } from 'utils/queryNormalizer';
import NameCard from 'molecules/NameCard';
import Introduction from 'molecules/Introduction';

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const indexPageData = queryNormalizer(data, 'indexPage');

  return (
    <Wrapper>
      <NameCard data={indexPageData.nameCard} />
      <Introduction
        data={{
          ...indexPageData.introduction,
          buttons: indexPageData.nameCard.buttons,
        }}
      />
    </Wrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query IndexPageQuery {
    allDataJson {
      edges {
        node {
          indexPage {
            nameCard {
              portrait {
                src
                alt
              }
              name
              title
              location
              buttons {
                text
                path
                isPrimary
              }
            }
            introduction {
              header
              intro
              description
            }
          }
        }
      }
    }
  }
`;

import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { DataProps } from 'models/pages/projectsPage';
import {
  Wrapper,
  Title,
  TitleWrapper,
  Container,
  Intro,
} from 'src/pageStyles/projectsPage.styles';
import { queryNormalizer } from 'utils/queryNormalizer';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import Icon from 'atoms/Icon';
import PageUpButton from 'molecules/PageUpButton';
import { P } from 'atoms/Typography';
import ProjectBox from 'src/components/molecules/ProjectBox';

const ProjectsPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const projectsPageData = queryNormalizer(data, 'projectsPage');

  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <Icon icon={faSquareFull} color="blue1" fontSize={20} />
          <Title text={projectsPageData.title} />
        </TitleWrapper>
        <Intro>
          <P text={projectsPageData.intro} />
        </Intro>
        {projectsPageData.projects.map((project) => (
          <ProjectBox key={project.github} data={project} />
        ))}
      </Container>
      <PageUpButton />
    </Wrapper>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects</title>;

export const query = graphql`
  query ProjectsPageQuery {
    allDataJson {
      edges {
        node {
          projectsPage {
            title
            intro
            projects {
              title
              type
              description
              image {
                img
                alt
              }
              link
              github
            }
            # experience
            # download
            # resumePath
            # education
            # experiences {
            #   date
            #   position
            #   company
            #   location
            #   description
            # }
            # educations {
            #   date
            #   degree
            #   school
            #   location
            #   description
            # }
          }
        }
      }
    }
  }
`;

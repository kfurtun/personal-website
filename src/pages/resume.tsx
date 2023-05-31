import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { DataProps } from 'src/models/pages/resumePage';
import {
  Wrapper,
  Title,
  TitleWrapper,
  HeaderWrapper,
} from 'src/pageStyles/resumePage.styles';
import { queryNormalizer } from 'utils/queryNormalizer';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components/atoms/Icon';
import ExperienceBox from 'src/components/molecules/ExperienceBox';

const ResumePage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const resumePageData = queryNormalizer(data, 'resumePage');

  return (
    <Wrapper>
      <TitleWrapper>
        <Icon icon={faSquareFull} color="blue1" fontSize={20} />
        <Title text={resumePageData.title} />
      </TitleWrapper>
      <HeaderWrapper>
        {resumePageData.experiences.map((experience) => (
          <ExperienceBox data={experience} />
        ))}
      </HeaderWrapper>
    </Wrapper>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <title>Resume</title>;

export const query = graphql`
  query ResumePageQuery {
    allDataJson {
      edges {
        node {
          resumePage {
            title
            experience
            download
            education
            experiences {
              date
              position
              company
              location
              description
            }
          }
        }
      }
    }
  }
`;

import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { DataProps } from 'models/pages/resumePage';
import {
  Wrapper,
  Title,
  TitleWrapper,
  HeaderWrapper,
  ExperienceHeader,
  SectionHeader,
  StyledDownloadLink,
} from 'src/pageStyles/resumePage.styles';
import { queryNormalizer } from 'utils/queryNormalizer';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import Icon from 'atoms/Icon';
import ExperienceBox from 'molecules/ExperienceBox';
import PageUpButton from 'molecules/PageUpButton';
import resumePDF from 'assets/files/resume.pdf';

const ResumePage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const resumePageData = queryNormalizer(data, 'resumePage');

  return (
    <Wrapper>
      <TitleWrapper>
        <Icon icon={faSquareFull} color="blue1" fontSize={20} />
        <Title text={resumePageData.title} />
      </TitleWrapper>
      <HeaderWrapper>
        <ExperienceHeader>
          <SectionHeader text={resumePageData.experience} />
          <StyledDownloadLink
            href={resumePDF}
            download="kutay-furtun-resume.pdf"
          >
            {resumePageData.download}
          </StyledDownloadLink>
        </ExperienceHeader>
        {resumePageData.experiences.map((experience) => (
          <ExperienceBox key={experience.date} data={experience} />
        ))}
      </HeaderWrapper>
      <HeaderWrapper>
        <ExperienceHeader>
          <SectionHeader text={resumePageData.education} />
        </ExperienceHeader>
        {resumePageData.educations.map((education) => (
          <ExperienceBox key={education.date} data={education} />
        ))}
      </HeaderWrapper>
      <PageUpButton />
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
            resumePath
            education
            experiences {
              date
              position
              company
              location
              description
            }
            educations {
              date
              degree
              school
              location
              description
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import { ProjectBoxProps } from 'models/molecules/projectBox';
import {
  Wrapper,
  LeftContainer,
  ProjectHeaderContainer,
  StyledH2,
  StyledH3,
  ProjectHeaderIcon,
  RightContainer,
  LinkContainer,
} from './ProjectBox.styles';
import { P } from 'components/atoms/Typography';
import Image from 'components/atoms/Image';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components/atoms/Icon';
import { ExternalLink } from 'components/atoms/Link';
import theme from 'theme/theme';

function ProjectBox({ data }: ProjectBoxProps) {
  const {
    title,
    type,
    description,
    image: { img, alt },
    link,
    github,
  } = data;
  return (
    <Wrapper img={!!img}>
      <LeftContainer>
        <ProjectHeaderContainer>
          <ProjectHeaderIcon />
          <StyledH2 text={title} />
          <StyledH3 text={type} />
        </ProjectHeaderContainer>
        <P text={description} />
        <LinkContainer>
          <ExternalLink href={github} target="_blank">
            <Icon icon={faGithub} color="#24292e" fontSize={26} />
          </ExternalLink>
          {link && (
            <ExternalLink href={link} target="_blank">
              <Icon icon={faLink} color={theme.colors.blue2} fontSize={26} />
            </ExternalLink>
          )}
        </LinkContainer>
      </LeftContainer>
      {img && (
        <RightContainer>
          <Image src={img} alt={alt} />
        </RightContainer>
      )}
    </Wrapper>
  );
}

export default ProjectBox;

import React from 'react';
import Image from 'atoms/Image';
import Icon from 'atoms/Icon';
import { NameCardProps } from 'models/molecules/nameCard';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper,
  ImageWrapper,
  Name,
  Title,
  Icons,
  VerticalLine,
  NameTitleWrapper,
  LinkWrapper,
  StyledInternalLink,
} from './NameCard.styles';
import { ExternalLink } from 'atoms/Link';

function NameCard({ data }: NameCardProps) {
  console.log(data.portrait.src);
  const { portrait, name, title, buttons } = data;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={portrait.src} alt={portrait.alt} />
      </ImageWrapper>
      <NameTitleWrapper>
        <Name text={name} />
        <VerticalLine />
        <Title text={title} />
        <LinkWrapper>
          {buttons.map((button) => (
            <StyledInternalLink to={button.path} primary={button.isPrimary}>
              {button.text}
            </StyledInternalLink>
          ))}
        </LinkWrapper>
      </NameTitleWrapper>
      <Icons>
        <ExternalLink
          href="https://www.linkedin.com/in/kfurtun/"
          target="_blank"
        >
          <Icon icon={faLinkedin} color="#0A66C2" fontSize={26} />
        </ExternalLink>
        <ExternalLink href="https://github.com/kfurtun" target="_blank">
          <Icon icon={faGithub} color="#24292e" fontSize={26} />
        </ExternalLink>
        <ExternalLink href="mailto:kfurtun@gmail.com">
          <Icon icon={faEnvelope} color="#D44638" fontSize={26} />
        </ExternalLink>
      </Icons>
    </Wrapper>
  );
}

export default NameCard;

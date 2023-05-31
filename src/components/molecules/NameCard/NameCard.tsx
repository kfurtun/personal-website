import React from 'react';
import Image from 'atoms/Image';
import Icon from 'atoms/Icon';
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
} from './NameCard.styles';
import { ExternalLink } from 'src/components/atoms/Link';

function NameCard(props) {
  console.log(props.data.portrait.src);
  const { portrait, name, title } = props.data;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={portrait.src} alt={portrait.alt} />
      </ImageWrapper>
      <NameTitleWrapper>
        <Name text={name} />
        <VerticalLine />
        <Title text={title} />
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

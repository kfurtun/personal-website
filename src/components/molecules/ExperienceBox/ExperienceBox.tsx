import React from 'react';
import { ExperienceBoxProps } from 'models/molecules/experienceBox';
import {
  Wrapper,
  RightContainer,
  LeftContainer,
  Date,
  Position,
  CompanyInfo,
} from './ExperienceBox.styles';
import { P } from 'atoms/Typography';

function ExperienceBox({ data }: ExperienceBoxProps) {
  console.log(data, 'zaa');
  return (
    <Wrapper>
      <LeftContainer>
        <Date text={data.date} />
        <Position text={data.position || data.degree} />
        <CompanyInfo text={data.company || data.school} />
        <CompanyInfo text={data.location} />
      </LeftContainer>
      <RightContainer>
        <P text={data.description} />
      </RightContainer>
    </Wrapper>
  );
}

export default ExperienceBox;

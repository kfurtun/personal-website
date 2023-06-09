import styled from 'styled-components';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';
import {
  TitleWrapper as _TitleWrapper,
  Title as _Title,
} from './resumePage.styles';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.beige2};
  padding-bottom: 5%;

  ${mediaQueries.medium} {
    justify-content: center;
  }
`;

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction:column;
width: ${pxToRem(320)};
gap: ${pxToRem(30)};

${mediaQueries.medium} {
  justify-content: center;
  width: ${pxToRem(724)};

`;

export const TitleWrapper = styled(_TitleWrapper)``;
export const Title = styled(_Title)``;

export const Intro = styled.div`
  text-align: center;
  ${mediaQueries.medium} {
    width: 80%;
  }
`;

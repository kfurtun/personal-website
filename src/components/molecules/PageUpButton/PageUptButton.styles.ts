import styled, { keyframes, css } from 'styled-components';
import pxToRem from 'src/theme/pxToRem';
import { mediaQueries } from 'src/theme/mediaQueries';

interface WrapperProps {
  isVisible: boolean;
}

const fadeIn = keyframes`
0%{
    opacity:0
};
100%{
    opacity:1
}
`;

const fadeOut = keyframes`
0%{
    opacity:1
};
100%{
    opacity:0
}
`;

export const Wrapper = styled.button<WrapperProps>`
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.blue1};
  position: fixed;
  bottom: 4%;
  right: 4%;
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  align-items: center;
  justify-content: center;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  animation: ${fadeIn} 1s ease-in;

  ${mediaQueries.large} {
    display: none;
  }
`;

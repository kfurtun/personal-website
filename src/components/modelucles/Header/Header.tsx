import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Wrapper,
  StyledInternalLink,
  NameContainer,
  StyledH3,
} from './Header.styles';
import { H3 } from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import Navbar from 'components/modelucles/Navbar';
import { HeaderData, HeaderProps, NavList } from 'models/molecules/header';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';

interface Data {
  header: HeaderProps;
  navigation: NavList[];
}

function Header(): JSX.Element {
  const data = useStaticQuery<HeaderData>(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          header {
            name
            position
          }
          navigation {
            path
            label
          }
        }
      }
    }
  `);

  const { header, navigation }: Data = data.site.siteMetadata;

  return (
    <Wrapper>
      <StyledInternalLink to="/">
        <NameContainer>
          <Icon icon={faSquareFull} color="blue1" />
          <H3 text={header.name} fontSize={24} />
        </NameContainer>
        <StyledH3 text={header.position} fontSize={18} />
      </StyledInternalLink>
      <Navbar navList={navigation} />
    </Wrapper>
  );
}

export default Header;

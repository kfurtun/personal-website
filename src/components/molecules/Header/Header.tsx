import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Wrapper,
  StyledInternalLink,
  NameContainer,
  Position,
  Name,
} from './Header.styles';
import Icon from 'components/atoms/Icon';
import Navbar from 'src/components/molecules/Navbar';
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
          <Name text={header.name} />
        </NameContainer>
        <Position text={header.position} />
      </StyledInternalLink>
      <Navbar navList={navigation} />
    </Wrapper>
  );
}

export default Header;

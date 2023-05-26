import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Wrapper } from './Navbar.styles';
import { NavList } from 'src/models/molecules/header';
import { H3 } from 'components/atoms/Typography';
import { StyledLink } from './Navbar.styles';
import theme from 'theme/theme';

interface NavbarProps {
  navList: NavList[];
}
function Navbar({ navList }: NavbarProps): JSX.Element {
  //   const navList: NavList[] = data.site.siteMetadata.navigation;
  return (
    <Wrapper>
      {navList.map((nav) => (
        <StyledLink to={nav.path} key={nav.label} activeStyle={activeStyle}>
          {nav.label}
        </StyledLink>
      ))}
    </Wrapper>
  );
}

export default Navbar;

const activeStyle = {
  color: theme.colors.blue2,
};

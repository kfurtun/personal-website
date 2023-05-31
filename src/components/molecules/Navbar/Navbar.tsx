import React from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from 'components/atoms/Icon';
import { NavList } from 'src/models/molecules/header';
import theme from 'theme/theme';
import {
  MenuBar,
  MenuBarButton,
  NavbarWrapper,
  StyledLink,
  Wrapper,
  CloseButton,
  LinksWrapper,
  CloseButtonWrapper,
} from './Navbar.styles';
import { useAnimatedState } from './useAnimatedState';

interface NavbarProps {
  navList: NavList[];
}

function Navbar({ navList }: NavbarProps) {
  const [menuBarState, setMenuBarState] = useAnimatedState(500 /* ms */);

  const onMenuBarButtonClick = () => {
    setMenuBarState(true);
    // to avoid scrolling in mobile while MenuBar open
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  };

  const onCloseButtonClick = () => {
    setMenuBarState(false);
    // revert back if MenuBar closed
    document.body.style.position = 'unset';
    document.body.style.width = 'unset';
  };

  return (
    <Wrapper>
      <NavbarWrapper>
        {navList.map((nav) => (
          <StyledLink to={nav.path} key={nav.label} activeStyle={activeStyle}>
            {nav.label}
          </StyledLink>
        ))}
      </NavbarWrapper>
      <MenuBar state={menuBarState}>
        <CloseButtonWrapper>
          <CloseButton onClick={onCloseButtonClick}>
            <Icon icon={faXmark} color="black1" fontSize={30} />
          </CloseButton>
        </CloseButtonWrapper>
        <LinksWrapper>
          {navList.map((nav) => (
            <StyledLink to={nav.path} key={nav.label} activeStyle={activeStyle}>
              {nav.label}
            </StyledLink>
          ))}
        </LinksWrapper>
      </MenuBar>
      <MenuBarButton onClick={onMenuBarButtonClick}>
        <Icon icon={faBars} color="blue1" fontSize={30} />
      </MenuBarButton>
    </Wrapper>
  );
}

export default Navbar;

const activeStyle = {
  color: theme.colors.blue2,
};

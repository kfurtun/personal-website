export interface HeaderData {
  site: {
    siteMetadata: {
      header: HeaderProps;
      navigation: NavList[];
    };
  };
}

export interface NavList {
  path: string;
  label: string;
}

export interface HeaderProps {
  name: string;
  position: string;
}

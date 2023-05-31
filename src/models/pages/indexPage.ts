export type DataProps = {
  allDataJson: {
    edges: {
      node: {
        indexPage: { nameCard: { portrait: string; alt: string } };
      };
    }[];
  };
};

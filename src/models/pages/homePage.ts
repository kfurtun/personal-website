export type DataProps = {
  allDataJson: {
    edges: {
      node: {
        mainPage: { header: { name: string; portrait: string; title: string } };
      };
    }[];
  };
};

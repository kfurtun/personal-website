import { Project } from '../molecules/projectBox';

export type DataProps = {
  allDataJson: {
    edges: {
      node: {
        resumePage: {
          title: string;
          intro: string;
          projects: Project[];
        };
      };
    }[];
  };
};

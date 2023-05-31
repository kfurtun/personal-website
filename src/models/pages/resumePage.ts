import { ExperienceBox } from '../molecules/experienceBox';

export type DataProps = {
  allDataJson: {
    edges: {
      node: {
        resumePage: {
          title: string;
          experience: string;
          download: string;
          education: string;
          experiences: ExperienceBox[];
        };
      };
    }[];
  };
};

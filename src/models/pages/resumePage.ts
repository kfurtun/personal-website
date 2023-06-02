import { ExperienceBox } from '../molecules/experienceBox';

export type DataProps = {
  allDataJson: {
    edges: {
      node: {
        resumePage: {
          title: string;
          experience: string;
          download: string;
          resumePath: string;
          education: string;
          experiences: ExperienceBox[];
          educations: ExperienceBox[];
        };
      };
    }[];
  };
};

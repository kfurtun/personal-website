import { NameCard } from '../molecules/nameCard';
import { Introduction } from '../molecules/intorduction';

export type DataProps = {
  allDataJson: {
    edges: {
      node: {
        indexPage: {
          nameCard: NameCard;
          introduction: Introduction;
        };
      };
    }[];
  };
};

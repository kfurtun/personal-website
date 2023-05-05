import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface ImageQueryResult {
  allFile: {
    edges: [
      {
        node: {
          relativePath: string;
          childImageSharp: { gatsbyImageData: IGatsbyImageData };
        };
      }
    ];
  };
}

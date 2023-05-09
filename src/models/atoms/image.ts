import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ImageProps {
  src: string;
  alt: string;
}

export interface ImageQueryResult {
  images: {
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

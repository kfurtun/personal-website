import { graphql, useStaticQuery } from 'gatsby';
import { ImageQueryResult } from 'models/atoms/image';

export const imageQuery = (): ImageQueryResult =>
  useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
                quality: 100
              )
            }
          }
        }
      }
    }
  `);

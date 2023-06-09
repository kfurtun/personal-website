import React, { useMemo } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImageProps, ImageQueryResult } from 'models/atoms/image';
import { imageQuery } from './imageQuery';

function Image({ src, alt, ...rest }: ImageProps): JSX.Element | null {
  const imageData: ImageQueryResult = imageQuery();

  const match = useMemo(
    () => imageData.images.edges.find(({ node }) => src === node.relativePath),
    [imageData, src]
  );

  if (!match) return null;

  const image = match.node.childImageSharp.gatsbyImageData;

  return (
    <GatsbyImage
      image={image}
      alt={alt}
      style={{ height: '100%', width: '100%' }}
      imgStyle={{ height: '100%', width: '100%' }}
      {...rest}
    />
  );
}

export default Image;

import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Button from 'src/components/atoms/Button/Button';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Button primary={true} />
      <Button primary={false} />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

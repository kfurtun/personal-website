import React from 'react';
import { render, fireEvent } from 'utils/test-utils';
import { InternalLink, ExternalLink } from 'components/atoms/Link';

const text = 'test';

//TODO
describe('Links', () => {
  // it('should render a link with the correct URL', () => {
  //   const { getByRole } = render(
  //     <Link url="https://www.kutayfurtun.com" text={text} />
  //   );
  //   const link = getByRole('link');
  //   fireEvent.click(link);
  //   expect(window.location.href).toBe('https://www.kutayfurtun.com');
  // });
  // it('should have the correct text content', () => {
  //   const { getByText } = render(<Link url="#" text={text} />);
  //   const linkText = getByText('test');
  //   expect(linkText).toBeInTheDocument();
  // });
});

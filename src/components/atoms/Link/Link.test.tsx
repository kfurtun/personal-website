import React from 'react';
import { render } from 'utils/test-utils';
import { InternalLink, ExternalLink } from 'components/atoms/Link';

const text = 'test';

describe('Internal link', () => {
  it('renders the correct link', () => {
    const { getByRole } = render(<InternalLink to="/projects" text={text} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('should have the correct text content', () => {
    const { getByText } = render(<InternalLink to="#" text={text} />);
    const linkText = getByText(text);
    expect(linkText).toBeInTheDocument();
  });
});

describe('External link', () => {
  it('renders the correct link', () => {
    const { getByRole } = render(
      <ExternalLink href="https://www.kutayfurtun.com">{text}</ExternalLink>
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.kutayfurtun.com');
  });

  it('should have the correct text content', () => {
    const { getByText } = render(<ExternalLink href="#">{text}</ExternalLink>);
    const linkText = getByText(text);
    expect(linkText).toBeInTheDocument();
  });
});

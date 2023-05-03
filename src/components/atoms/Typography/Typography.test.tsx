import React from 'react';
import { render } from 'utils/test-utils';
import { H1, H2, H3, P } from 'src/components/atoms/Typography';
import pxToRem from 'src/theme/pxToRem';
import theme from 'src/theme/theme';
import hexToRgb from 'src/utils/hexToRgb';

const text = 'Test';
const color = 'blue1';
describe('Typography', () => {
  it('renders H1 component with given props', () => {
    const { getByRole } = render(
      <H1 text={text} fontSize={18} color={color} />
    );

    const styles = window.getComputedStyle(getByRole('heading'));

    expect(styles['fontSize']).toEqual(pxToRem(18));
    expect(styles['color']).toEqual(hexToRgb(theme.colors[color]));
  });
  it('renders H2 compnent as h2 element', () => {
    const { getByRole } = render(
      <H2 text={text} fontSize={18} color={color} />
    );

    const h2 = getByRole('heading', { level: 2 });

    expect(h2.tagName).toBe('H2');
  });

  it('renders H3 compnent as h3 element', () => {
    const { getByRole } = render(
      <H3 text={text} fontSize={18} color={color} />
    );

    const h3 = getByRole('heading', { level: 3 });

    expect(h3.tagName).toBe('H3');
  });

  it('renders P compnent as p element', () => {
    const { getByText } = render(<P text={text} fontSize={18} color={color} />);

    const p = getByText(text);

    expect(p.tagName).toBe('P');
  });
});

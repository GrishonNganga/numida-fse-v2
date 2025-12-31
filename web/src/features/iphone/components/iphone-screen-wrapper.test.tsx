import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import IphoneScreenWrapper from './iphone-screen-wrapper';

describe('IphoneScreenWrapper', () => {
  it('accepts children prop', () => {
    const element = createElement(IphoneScreenWrapper, { children: 'Content' });
    expect(element.props.children).toBe('Content');
  });

  it('renders with component children', () => {
    const child = createElement('div', {}, 'Child content');
    const element = createElement(IphoneScreenWrapper, { children: child });
    expect(element.props.children).toBe(child);
  });
});


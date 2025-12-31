import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import IphoneLoading from './iphone-loading';

describe('IphoneLoading', () => {
  it('accepts progress prop', () => {
    const element = createElement(IphoneLoading, { progress: 50 });
    expect(element.props.progress).toBe(50);
  });

  it('handles 0 progress', () => {
    const element = createElement(IphoneLoading, { progress: 0 });
    expect(element.props.progress).toBe(0);
  });

  it('handles 100 progress', () => {
    const element = createElement(IphoneLoading, { progress: 100 });
    expect(element.props.progress).toBe(100);
  });

  it('handles intermediate progress values', () => {
    [25, 50, 75].forEach(progress => {
      const element = createElement(IphoneLoading, { progress });
      expect(element.props.progress).toBe(progress);
    });
  });
});


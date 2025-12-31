import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { ProgressBar } from './progress-bar';

describe('ProgressBar', () => {
  it('accepts progress prop', () => {
    const element = createElement(ProgressBar, { progress: 50 });
    expect(element.props.progress).toBe(50);
  });

  it('accepts color prop', () => {
    const element = createElement(ProgressBar, { progress: 75, color: '#3BC5E5' });
    expect(element.props.color).toBe('#3BC5E5');
  });

  it('handles 0 progress', () => {
    const element = createElement(ProgressBar, { progress: 0 });
    expect(element.props.progress).toBe(0);
  });

  it('handles 100 progress', () => {
    const element = createElement(ProgressBar, { progress: 100 });
    expect(element.props.progress).toBe(100);
  });
});


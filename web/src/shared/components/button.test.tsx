import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import { Button } from './button';

describe('Button', () => {
  it('renders with default variant', () => {
    const element = createElement(Button, { children: 'Click me' });
    expect(element.props.children).toBe('Click me');
  });

  it('accepts variant prop', () => {
    const element = createElement(Button, { children: 'Click', variant: 'danger' });
    expect(element.props.variant).toBe('danger');
  });

  it('accepts loading prop', () => {
    const element = createElement(Button, { children: 'Submit', loading: true });
    expect(element.props.loading).toBe(true);
  });

  it('accepts disabled prop', () => {
    const element = createElement(Button, { children: 'Submit', disabled: true });
    expect(element.props.disabled).toBe(true);
  });

  it('accepts onClick handler', () => {
    const handleClick = () => {};
    const element = createElement(Button, { children: 'Click', onClick: handleClick });
    expect(element.props.onClick).toBe(handleClick);
  });
});


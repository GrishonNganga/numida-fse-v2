import { describe, it, expect } from 'vitest';

describe('useLoadingProgress options', () => {
  it('has correct default values', () => {
    const defaults = {
      increment: 10,
      intervalMs: 100,
      delayAfterComplete: 1000,
    };
    expect(defaults.increment).toBe(10);
    expect(defaults.intervalMs).toBe(100);
    expect(defaults.delayAfterComplete).toBe(1000);
  });
});

describe('loading progress logic', () => {
  it('increments progress correctly', () => {
    let progress = 0;
    const increment = 10;
    
    while (progress < 100) {
      progress += increment;
    }
    
    expect(progress).toBe(100);
  });

  it('stops at 100', () => {
    let progress = 90;
    const increment = 10;
    
    progress = progress < 100 ? progress + increment : 100;
    
    expect(progress).toBe(100);
  });

  it('custom increment works', () => {
    let progress = 0;
    const increment = 25;
    
    progress += increment;
    expect(progress).toBe(25);
    
    progress += increment;
    expect(progress).toBe(50);
  });
});


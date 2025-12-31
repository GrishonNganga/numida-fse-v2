import { describe, it, expect } from 'vitest';
import { formatCurrency, calculateOverdueDays } from './index';

describe('formatCurrency', () => {
  it('formats number as KES currency', () => {
    expect(formatCurrency(1000)).toContain('1,000');
  });

  it('formats large numbers with commas', () => {
    expect(formatCurrency(1000000)).toContain('1,000,000');
  });

  it('formats zero', () => {
    expect(formatCurrency(0)).toContain('0');
  });
});

describe('calculateOverdueDays', () => {
  it('returns 0 for future dates', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    expect(calculateOverdueDays(futureDate)).toBe(0);
  });

  it('returns 0 for today', () => {
    expect(calculateOverdueDays(new Date())).toBe(0);
  });

  it('returns correct days for past dates', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 5);
    expect(calculateOverdueDays(pastDate)).toBe(5);
  });
});


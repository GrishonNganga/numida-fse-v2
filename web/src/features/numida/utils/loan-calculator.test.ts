import { describe, it, expect } from 'vitest';
import { calculateLoanInterest, calculateTotalAmount } from './loan-calculator';

describe('calculateLoanInterest', () => {
  it('calculates interest correctly for 12 months at 12%', () => {
    const interest = calculateLoanInterest(10000, 12, 12);
    expect(interest).toBe(1200);
  });

  it('calculates interest correctly for 6 months at 10%', () => {
    const interest = calculateLoanInterest(5000, 10, 6);
    expect(interest).toBe(250);
  });

  it('returns 0 for 0 principal', () => {
    const interest = calculateLoanInterest(0, 12, 12);
    expect(interest).toBe(0);
  });

  it('returns 0 for 0 interest rate', () => {
    const interest = calculateLoanInterest(10000, 0, 12);
    expect(interest).toBe(0);
  });

  it('returns 0 for 0 loan term', () => {
    const interest = calculateLoanInterest(10000, 12, 0);
    expect(interest).toBe(0);
  });
});

describe('calculateTotalAmount', () => {
  it('adds principal and interest', () => {
    expect(calculateTotalAmount(10000, 1200)).toBe(11200);
  });

  it('returns principal when interest is 0', () => {
    expect(calculateTotalAmount(5000, 0)).toBe(5000);
  });
});


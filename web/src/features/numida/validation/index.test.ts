import { describe, it, expect } from 'vitest';
import validateAddPayment from './index';

describe('validateAddPayment', () => {
  it('returns error when due date is missing', () => {
    const result = validateAddPayment({ paymentStatus: 'not_paid' });
    expect(result.error).toBe(true);
    expect(result.message).toBe('Due date is required');
  });

  it('returns error when payment status is missing', () => {
    const result = validateAddPayment({ dueDate: new Date(), paymentStatus: '' });
    expect(result.error).toBe(true);
    expect(result.message).toBe('Payment status is required');
  });

  it('returns error when status is paid but payment date is missing', () => {
    const result = validateAddPayment({ dueDate: new Date(), paymentStatus: 'paid' });
    expect(result.error).toBe(true);
    expect(result.message).toBe('Payment date is required when payment status is paid');
  });

  it('returns success when all required fields are provided', () => {
    const result = validateAddPayment({ 
      dueDate: new Date(), 
      paymentStatus: 'paid', 
      paymentDate: new Date() 
    });
    expect(result.error).toBe(false);
  });

  it('returns success for not_paid status without payment date', () => {
    const result = validateAddPayment({ dueDate: new Date(), paymentStatus: 'not_paid' });
    expect(result.error).toBe(false);
  });
});


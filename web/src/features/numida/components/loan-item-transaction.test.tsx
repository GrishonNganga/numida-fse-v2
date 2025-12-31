import { describe, it, expect } from 'vitest';
import { createElement } from 'react';
import LoanItemTransaction from './loan-item-transaction';

describe('LoanItemTransaction', () => {
  const mockPayment = {
    id: 1,
    status: 'On Time',
    dueDate: '2024-01-15',
    paymentDate: '2024-01-10',
  };

  it('accepts index prop', () => {
    const element = createElement(LoanItemTransaction, {
      index: 0,
      amountPayable: 1000,
      payment: mockPayment,
    });
    expect(element.props.index).toBe(0);
  });

  it('accepts amountPayable prop', () => {
    const element = createElement(LoanItemTransaction, {
      index: 0,
      amountPayable: 5000,
      payment: mockPayment,
    });
    expect(element.props.amountPayable).toBe(5000);
  });

  it('accepts payment prop', () => {
    const element = createElement(LoanItemTransaction, {
      index: 0,
      amountPayable: 1000,
      payment: mockPayment,
    });
    expect(element.props.payment.status).toBe('On Time');
  });

  it('handles different payment statuses', () => {
    const statuses = ['On Time', 'Late', 'Defaulted', 'Unpaid'];
    statuses.forEach(status => {
      const element = createElement(LoanItemTransaction, {
        index: 0,
        amountPayable: 1000,
        payment: { ...mockPayment, status },
      });
      expect(element.props.payment.status).toBe(status);
    });
  });
});


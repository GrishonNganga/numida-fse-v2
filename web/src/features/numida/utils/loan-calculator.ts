export const calculateLoanInterest = (principal: number, interestRate: number, loanTerm: number): number => {
  return (principal * interestRate * loanTerm) / 1200;
};

export const calculateTotalAmount = (principal: number, interest: number): number => {
  return principal + interest;
};


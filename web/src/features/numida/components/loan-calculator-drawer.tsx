import { useState } from "react";
import { Drawer, Input, Card, Text } from "@/shared";
import { formatCurrency } from "@/shared/utils";
import { calculateLoanInterest, calculateTotalAmount } from "@/features/numida/utils/loan-calculator";
import '@/features/numida/styles/loan-calculator-drawer.css';

interface LoanCalculatorDrawerProps {
    onClose: () => void;
}

const LoanCalculatorDrawer = ({ onClose }: LoanCalculatorDrawerProps) => {
    const [principal, setPrincipal] = useState<number>(0);
    const [interestRate, setInterestRate] = useState<number>(13);
    const [loanTerm, setLoanTerm] = useState<number>(12);

    const totalInterest = calculateLoanInterest(principal, interestRate, loanTerm);
    const totalAmount = calculateTotalAmount(principal, totalInterest);

    return (
        <Drawer open={true} height="content" onClose={onClose} title="Loan Calculator">
            <div className="loan-calculator-container">
                <Input
                    label="Principal Amount"
                    type="number"
                    placeholder="Enter principal amount"
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                />

                <div className="loan-calculator-slider-group">
                    <div className="loan-calculator-slider-label">
                        <Text size="small" color="#464646" weight="bold">Interest Rate (%)</Text>
                        <Text size="small" color="#2C839B" weight="bold">{interestRate}%</Text>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="loan-calculator-slider"
                    />
                </div>

                <div className="loan-calculator-slider-group">
                    <div className="loan-calculator-slider-label">
                        <Text size="small" color="#464646" weight="bold">Loan Term (Months)</Text>
                        <Text size="small" color="#2C839B" weight="bold">{loanTerm}</Text>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="60"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="loan-calculator-slider"
                    />
                </div>

                <Card className="loan-calculator-results">
                    <div className="loan-calculator-result-row">
                        <Text size="small" color="#797777">Total Interest:</Text>
                        <Text size="medium" color="#000000" weight="bold">{formatCurrency(totalInterest)}</Text>
                    </div>
                    <div className="loan-calculator-divider" />
                    <div className="loan-calculator-result-row">
                        <Text size="small" color="#797777">Total Amount:</Text>
                        <Text size="medium" color="#000000" weight="bold">{formatCurrency(totalAmount)}</Text>
                    </div>
                </Card>
            </div>
        </Drawer>
    );
};

export default LoanCalculatorDrawer;


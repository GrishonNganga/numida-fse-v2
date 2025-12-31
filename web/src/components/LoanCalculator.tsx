import { useEffect, useState } from 'react'
import { calculateLoanInterest } from '@/features/numida/utils/loan-calculator';

interface LoanCalculatorProps {
    principal: number;
    rate: number;
    months: number;
}

export const LoanCalculator = ({ principal, rate, months }: LoanCalculatorProps) => {
    const [interest, setInterest] = useState(0)

    useEffect(() => {
        setInterest(calculateLoanInterest(principal, rate, months))
    }, [principal, rate, months])

    return (
        <div>
            <h3>Loan Interest: {interest}</h3>
        </div>
    )
}

import { useState } from 'react';
import { LoanCalculator } from '@/components/LoanCalculator';
import '@/pages/calculator.css';

const CalculatorPage = () => {
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(13);
    const [months, setMonths] = useState(12);

    return (
        <div className="calculator-page">
            <h2>Loan Calculator</h2>
            <div className="calculator-inputs">
                <label>
                    Principal
                    <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} />
                </label>
                <label>
                    Interest Rate (%)
                    <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} />
                </label>
                <label>
                    Months
                    <input type="number" value={months} onChange={e => setMonths(Number(e.target.value))} />
                </label>
            </div>
            <LoanCalculator principal={principal} rate={rate} months={months} />
        </div>
    );
};

export default CalculatorPage;


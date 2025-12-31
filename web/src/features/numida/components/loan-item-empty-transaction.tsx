import { Card, Text } from '@/shared';
import '@/features/numida/styles/loan-item-empty-transaction.css';

const LoanItemEmptyTransaction = () => {
    return (
        <Card className="loan-item-empty-transaction-container">
            <Text size="medium" color="#797777">No transactions found</Text>
        </Card>
    )
}

export default LoanItemEmptyTransaction;
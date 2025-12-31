import { Text } from '@/shared';
import { formatCurrency } from '@/shared/utils';
import '@/features/numida/styles/loan-item-transaction.css';
import { LoanStatus, loanStatuses } from '@/features/numida/constants';
import { LoanPaymentType } from '@/__generated__/graphql';

interface LoanItemTransactionProps {
    index: number;
    amountPayable: number;
    payment: LoanPaymentType;
}

const renderIcon = (status: LoanStatus) => {
    const { color } = loanStatuses[status];
    const isUnpaid = status === 'Unpaid';

    return (
        <svg
            className="loan-item-transaction-details-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={color}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isUnpaid ? "M6 18 18 6M6 6l12 12" : "m4.5 12.75 6 6 9-13.5"}
            />
            </svg>
    );
};

const LoanItemTransaction = ({ index, amountPayable, payment }: LoanItemTransactionProps) => {
    const statusStyle = loanStatuses[payment.status as LoanStatus];
    return (
        <div className="loan-item-transaction-container">
            <div className="loan-item-transaction-details">
                <div className="loan-item-transaction-details-icon-container" style={{ backgroundColor: statusStyle.backgroundColor }}>
                    {renderIcon(payment.status as LoanStatus)}
                </div>
                <div className="loan-item-transaction-details-content">
                    <Text size="small" color="#000000" weight="bold">Installment {index + 1}</Text>
                    <Text size="medium" weight="bolder"> {formatCurrency(amountPayable)}</Text>
                </div>
            </div>
            <div className="loan-item-transaction-details-content">
                <div className="loan-item-transaction-details-content-status" style={{ color: statusStyle.color, backgroundColor: statusStyle.backgroundColor }}>
                    <Text size="small" weight="bold" color={statusStyle.color}>{payment.status}</Text>
                </div>
                <Text size="small" color="#797777">{payment.paymentDate}</Text>
            </div>

        </div>
    )
}

export default LoanItemTransaction;

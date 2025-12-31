export type LoanStatus = 'On Time' | 'Late' | 'Defaulted' | 'Unpaid';

type LoanStatusStyle = {
    color: string;
    backgroundColor: string;
};

export const loanStatuses: Record<LoanStatus, LoanStatusStyle> = {
    'On Time': {
        color: 'rgba(64, 192, 87, 1)',        
        backgroundColor: 'rgba(64, 192, 87, 0.12)',
    },
    'Late': {
        color: 'rgba(245, 152, 44, 1)',
        backgroundColor: 'rgba(245, 152, 44, 0.12)',
    },
    'Defaulted': {
        color: 'rgba(240, 61, 61, 1)',
        backgroundColor: 'rgba(240, 61, 61, 0.12)',
    },
    'Unpaid': {
        color: 'rgba(128, 128, 128, 1)',
        backgroundColor: 'rgba(128, 128, 128, 0.12)',
    },
};

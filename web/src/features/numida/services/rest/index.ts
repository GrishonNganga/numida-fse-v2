const API_URL = import.meta.env.VITE_API_URL;

interface AddPaymentParams {
    loanId: number;
    dueDate: Date;
    paymentDate?: Date;
}

export const addLoanPayment = async ({ loanId, dueDate, paymentDate }: AddPaymentParams) => {
    const response = await fetch(`${API_URL}/api/loans/${loanId}/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            due_date: dueDate.toISOString().split('T')[0],
            payment_date: paymentDate ? paymentDate.toISOString().split('T')[0] : null,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to add payment');
    }

    return response.json();
};


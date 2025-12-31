const validateAddPayment = (data: { dueDate?: Date, paymentStatus: string, paymentDate?: Date }) => {
    if (!data.dueDate) {
        return {
            error: true,
            message: 'Due date is required'
        };
    }
    if (!data.paymentStatus) {
        return {
            error: true,
            message: 'Payment status is required'
        };
    }
    if (data.paymentStatus === 'paid' && !data.paymentDate) {
        return {
            error: true,
            message: 'Payment date is required when payment status is paid'
        };
    }
    return {
        error: false,
        message: ''
    };
}

export default validateAddPayment;
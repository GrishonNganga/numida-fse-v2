import { ExistingLoans } from '@/__generated__/graphql';

export const calculateOverdueDays = (paymentDate: Date): number => {
    const now = new Date();
    const utcDue = Date.UTC(paymentDate.getFullYear(), paymentDate.getMonth(), paymentDate.getDate());
    const utcNow = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const msPerDay = 24 * 60 * 60 * 1000;
    const diff = utcNow - utcDue;
    return diff > 0 ? Math.floor(diff / msPerDay) : 0;
}

export const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'KES', minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export const getFirstDefaultedPayment = (payments: ExistingLoans['payments']) => {
    if (!payments || payments.length === 0) return null;
    const sortedPayments = [...payments].sort((a, b) => {
        const aTime = a?.dueDate ? new Date(a.dueDate).getTime() : 0;
        const bTime = b?.dueDate ? new Date(b.dueDate).getTime() : 0;
        return bTime - aTime;
    });
    const firstNotPaidPayment = sortedPayments.find((payment) => payment?.paymentDate === null);
    return firstNotPaidPayment?.dueDate ? new Date(firstNotPaidPayment.dueDate) : null;
}

import { useEffect, useState } from "react";
import { Select, CalendarInput, Drawer, Button } from "@/shared";
import { useToast } from "@/shared/hooks/use-toast";
import { addLoanPayment } from "@/features/numida/services/rest";
import '@/features/numida/styles/add-payment-drawer.css';
import validateAddPayment from '@/features/numida/validation';

interface AddPaymentDrawerProps {
    loanName: string;
    loanId: number;
    onClose: () => void;
    onSuccess?: () => void;
}

const AddPaymentDrawer = ({ loanName, loanId, onClose, onSuccess }: AddPaymentDrawerProps) => {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<string>('not_paid');
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const [paymentDate, setPaymentDate] = useState<Date | null>(null);

    useEffect(() => {
        if (paymentStatus !== 'paid') {
            setPaymentDate(null);
        }
    }, [paymentStatus]);

    const handleSave = async () => {
        const validation = validateAddPayment({ dueDate: dueDate ?? undefined, paymentStatus, paymentDate: paymentDate ?? undefined });
        if (validation.error) {
            toast({
                title: 'Validation Error',
                message: validation.message,
                type: 'error'
            });
            return;
        }

        setLoading(true);
        try {
            await addLoanPayment({
                loanId,
                dueDate: dueDate!,
                paymentDate: paymentDate ?? undefined,
            });
            toast({
                title: 'Payment Saved',
                message: 'Payment has been saved successfully',
                type: 'success'
            });
            onSuccess?.();
            onClose();
        } catch {
            toast({
                title: 'Error',
                message: 'Failed to save payment',
                type: 'error'
            });
        } finally {
            setLoading(false);
        }
    }
    return (
        <Drawer open={true} height="content" onClose={onClose} title={`Payment for ${loanName}`}>
            <div className="add-payment-drawer-container">
                <CalendarInput label="Due Date" className="add-payment-drawer-calendar" onChange={(e) => setDueDate(new Date(e.target.value))} />
                <Select label="Payment Status" className="add-payment-drawer-select" onChange={(e) => setPaymentStatus(e.target.value)}>
                    <Select.Option value="not_paid">Not Paid</Select.Option>
                    <Select.Option value="paid">Paid</Select.Option>
                </Select>
                {
                    paymentStatus === 'paid' && (
                        <CalendarInput label="Payment Date" className="add-payment-drawer-calendar" onChange={(e) => setPaymentDate(new Date(e.target.value))} />
                    )
                }
                <div className="add-payment-drawer-buttons">
                    <Button variant="danger" onClick={onClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave} loading={loading}>Save</Button>
                </div>
            </div>
        </Drawer>
    )
}

export default AddPaymentDrawer;
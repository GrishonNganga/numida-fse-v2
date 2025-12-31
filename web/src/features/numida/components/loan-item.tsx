import { useState, lazy, Suspense } from 'react';
import LoanItemTransaction from './loan-item-transaction';

const AddPaymentDrawer = lazy(() => import('./add-payment-drawer'));
import LoanItemEmptyTransaction from './loan-item-empty-transaction';

import { Card, CardTitle, Text, Button } from '@/shared';
import { ProgressBar } from '@/shared/components/progress-bar';

import { formatCurrency, getFirstDefaultedPayment, calculateOverdueDays } from '@/shared/utils';

import '@/features/numida/styles/loan-item.css';

const LoanItem = ({ loan, onRefetch }: { loan: any; onRefetch?: () => void }) => {
    const [showHiddenDetails, setShowHiddenDetails] = useState(false);
    const [showAddPaymentModalForLoanId, setShowAddPaymentModalForLoanId] = useState<number | null>(null);

    const sortedPaymentsByDueDate = [...loan.payments].sort((a, b) => {
        const aTime = a?.dueDate ? new Date(a.dueDate).getTime() : 0;
        const bTime = b?.dueDate ? new Date(b.dueDate).getTime() : 0;
        return aTime - bTime;
    });

    const firstDefaultedPayment = getFirstDefaultedPayment(loan.payments);
    const overdueDays = firstDefaultedPayment ? calculateOverdueDays(firstDefaultedPayment) : 0;
    const isOverdue = overdueDays > 0;
    const percentagePaid = (loan.amountPayable - loan.unpaidBalance) / loan.amountPayable * 100;
    return (
        <div className="loan-item-container">
            <div className="loan-item-details-container">
                <div className="loan-item-overview-container" onClick={() => setShowHiddenDetails(!showHiddenDetails)}>
                    <div className='loan-item-overview-content'>
                        <div className="loan-item-overview-title">
                            <Text size="medium" color="#000000" weight="bolder">{loan.name}</Text>
                        </div>
                        <div className='loan-item-overview-description'>
                            <Text size="small" color="#797777">KES</Text>
                            <Text size="large" className='loan-item-overview-amount'>{formatCurrency(loan.principal)}</Text>
                        </div>
                        <div className='loan-item-overview-interest-rate-container' style={{ display: isOverdue ? 'flex' : 'none' }}>
                            <span className='loan-item-overview-interest-rate'>
                                <svg className='loan-item-overview-interest-rate-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </span>
                            <Text size="small" color="#797777">Overdue</Text>
                            <Text size="small" color="#797777">{overdueDays > 0 ? `${overdueDays} day${overdueDays > 1 ? 's' : ''}` : ''}</Text>
                        </div>
                    </div>
                    <div className="loan-item-actions-container">
                        <div className="loan-item-action-item" onClick={() => setShowHiddenDetails(!showHiddenDetails)}>
                            {
                                showHiddenDetails ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>

                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="loan-item-action-item-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                )
                            }

                        </div>
                    </div>
                </div>
                <div className="loan-item-hidden-container" style={{ display: showHiddenDetails ? 'flex' : 'none' }}>
                    <Card className='loan-item-repayment-progress'>
                        <CardTitle>
                            Repayment progress
                        </CardTitle>
                        <div>
                            <Text size="small" color="#797777">
                                Outstanding
                            </Text>
                            <div className='loan-item-repayment-progress-outstanding-amount'>
                                <Text size="small" color="#797777">KES</Text>
                                <Text size="large" className='loan-item-repayment-progress-outstanding-amount-value'>{formatCurrency(loan.unpaidBalance)}</Text>
                            </div>
                        </div>
                        <div className='loan-item-repayment-progress-outstanding-progress'>
                            <div>
                                <div className='loan-item-repayment-progress-outstanding-progress-paid'>
                                    <Text size="small" color="#797777">{formatCurrency(loan.amountPayable - loan.unpaidBalance)} paid</Text>
                                    <Text size="small" color="#797777">{percentagePaid.toFixed(0)}%</Text>
                                </div>
                                <ProgressBar progress={percentagePaid} color="#3BC5E5" />
                            </div>
                            <div className="separator"></div>
                        </div>
                        <div className='loan-item-repayment-progress-outstanding-summary'>
                            <div className='loan-item-repayment-progress-outstanding-summary-item'>
                                <Text size="small" color="#797777">Total Loan (incl interest)</Text>
                                <Text size="medium" color="#000000" weight="bold">{formatCurrency(loan.amountPayable)}</Text>
                            </div>
                            <div className='loan-item-repayment-progress-outstanding-summary-item'>
                                <Text size="small" color="#797777">Amount paid</Text>
                                <Text size="medium" color="#000000" weight="bold">{formatCurrency(loan.amountPayable - loan.unpaidBalance)}</Text>
                            </div>
                        </div>
                    </Card>
                    <div className='separator' />
                    <div className="loan-item-repayment-transactions">
                        <div className="loan-item-repayment-transactions-title">
                            <CardTitle>Transactions</CardTitle>
                            <Text>
                                <Button onClick={() => setShowAddPaymentModalForLoanId(loan.id)}>
                                    Add
                                </Button>
                            </Text>
                        </div>
                        <div className="loan-item-repayment-transactions-list">
                            {
                                !loan?.payments || loan?.payments?.length === 0 ? (
                                    <LoanItemEmptyTransaction />
                                ) : (
                                    sortedPaymentsByDueDate?.map((payment: any, index: number) => (
                                        <LoanItemTransaction index={index} key={payment.id} amountPayable={loan.monthlyPayment} payment={payment} />
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                showAddPaymentModalForLoanId && (
                    <Suspense fallback={null}>
                        <AddPaymentDrawer loanName={loan.name} loanId={showAddPaymentModalForLoanId} onClose={() => setShowAddPaymentModalForLoanId(null)} onSuccess={onRefetch} />
                    </Suspense>
                )
            }
        </div>
    )
}

export default LoanItem;

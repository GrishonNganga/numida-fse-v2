import '@/features/numida/styles/loan-item-skeleton.css';

const LoanItemSkeleton = () => {
    return (
        <div className="loan-skeleton">
            <div className="loan-skeleton-header">
                <div className="loan-skeleton-title" />
                <div className="loan-skeleton-icon" />
            </div>
            <div className="loan-skeleton-amount" />
            <div className="loan-skeleton-status" />
        </div>
    );
};

export default LoanItemSkeleton;


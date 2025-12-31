import LoanItem from './loan-item';
import LoanItemSkeleton from './loan-item-skeleton';
import '@/features/numida/styles/loans-list.css';
import { useQuery } from '@apollo/client';
import { GET_LOANS } from '../services/graphql/queries';
import { Get_LoansQuery } from '@/__generated__/graphql';

const LoansList = () => {
  const { data, loading, error, refetch } = useQuery<Get_LoansQuery>(GET_LOANS);

  if (loading) return (
    <div className="loans-list-container">
      <LoanItemSkeleton />
      <div className="separator" />
      <LoanItemSkeleton />
      <div className="separator" />
      <LoanItemSkeleton />
    </div>
  );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="loans-list-container">
      {data?.loans?.length === 0 ? (
        <div>No loans found</div>
      ) : (
        data?.loans?.map((loan) => (
          loan && <div key={loan.id}>
            <LoanItem key={loan.id} loan={loan} onRefetch={refetch} />
            <div className="separator" />
          </div>
        ))
      )}
    </div>
  )
}

export default LoansList;
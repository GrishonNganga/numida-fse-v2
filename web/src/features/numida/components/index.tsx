import { SafeArea } from '@/shared';
import Header from './header';
import LoansList from './loans-list';

const Numida = () => {

    return (
        <SafeArea>
            <Header />
            <div className="separator" />
            <LoansList />
        </SafeArea>
    )
}

export default Numida;
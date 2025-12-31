import IphoneLoading from './iphone-loading';
import { useLoadingProgress } from '../hooks/useLoadingProgress';
import HomeScreen from './home-screen';

const Launcher = () => {
    const { progress, loading } = useLoadingProgress();

    if (loading) {
        return <IphoneLoading progress={progress} />;
    }
    
    return (
        <HomeScreen />
    );
};

export default Launcher;

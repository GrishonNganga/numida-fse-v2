import IphoneScreenWrapper from './iphone-screen-wrapper';
import Launcher from './iphone-launcher';
import { ToastProvider } from '@/shared/hooks/use-toast';

const IphoneScreen = () => {
    return (
        <IphoneScreenWrapper>
            <ToastProvider>
                <Launcher />
            </ToastProvider>
        </IphoneScreenWrapper>
    )
}

export default IphoneScreen;
import HomeStatusBar from './home-status-bar';
import iphoneFrame from '@/assets/iphone.png';
import '../styles/iphone-screen-wrapper.css';

const IphoneScreenWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="iphone-screen-container">
            <div className="iphone-screen-content">
                {children}
            </div>
            <HomeStatusBar/>
            <div className="dynamic-island" />
            <img src={iphoneFrame} alt="" className="iphone-frame" />
        </div>
    )
}

export default IphoneScreenWrapper;

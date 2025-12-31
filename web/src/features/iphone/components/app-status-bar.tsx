import '@/features/iphone/styles/app-status-bar.css';
import { statusBarIcons } from '../constants/statusbar-icons';

const AppStatusBar = () => {
   
    return (
        <div className="status-bar">
            <div className="status-bar-left">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="status-bar-right">
                {statusBarIcons.map((icon) => (
                    <div key={icon.name} className="status-bar-right-icon">
                        {icon.icon}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppStatusBar;
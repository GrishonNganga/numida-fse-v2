import { useNavigate } from 'react-router-dom';
import '@/shared/styles/safe-area.css';

const SafeArea = ({ children, backgroundColor='#ffffff', scrollable=false }: { children: React.ReactNode, backgroundColor?: string, scrollable?: boolean }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="safe-area-wrapper" style={{ backgroundColor }}>
            <div className={`safe-area-content ${scrollable ? 'safe-area-content-scrollable' : ''}`}>
                {children}
            </div>
            <div className="safe-area-bottom">
                <div className="safe-area-bottom-inner" onClick={handleClick} />
            </div>
        </div>
    )
}

export default SafeArea;
import { Link } from 'react-router-dom';
import '@/features/iphone/styles/apps-home.css';
import numidaLogo from '@/assets/numida-logo.png';

const AppsHome = () => {
    const apps = [
        {
            name: 'Numida',
            icon: numidaLogo
        }
    ]
    return (
        <div className="apps-home-container">
            <div className="apps-list-wrapper">
                <div className='apps-list-container'>
                    {apps.map((app) => (
                        <Link
                            key={app.name}
                            to={`/${app.name.toLowerCase()}`}
                            className='apps-list-item'
                        >
                            <img src={app.icon} alt={app.name} className='apps-list-item-icon' />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AppsHome;

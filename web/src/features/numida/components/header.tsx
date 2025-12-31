import UserProfile from './user-profile';
import TitleBar from './title-bar';
import '@/features/numida/styles/header.css';

const Header = () => {
    return (
        <div className="header-container">
            <UserProfile/>
            <TitleBar />
        </div>
    )
}

export default Header;
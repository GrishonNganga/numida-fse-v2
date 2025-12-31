import '@/features/numida/styles/user-profile.css';

const UserProfile = () => {
    return (
        <div className="user-profile-container">
            <div className="user-profile-text-container">
                <a href="/calculator" target="_blank" rel="noopener noreferrer" className="user-profile-welcome">Welcome back,</a>
                <div className="user-profile-name">Grishon</div>
            </div>
            <div className="user-profile-image-container">
                <img className="user-profile-image" src="https://avatars.githubusercontent.com/u/52824774?v=4" alt="Grishon's Profile" />
            </div>
        </div>
    )
}

export default UserProfile;
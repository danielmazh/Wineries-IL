import React from 'react';
import NavBar from '../common/components/NavBar';
import UserProfile from '../common/components/userProfile/UserProfile';

const ProfilePage = () => {
    const authToken = localStorage.getItem('token');
    return (
      <div className="user-form-container">
        <>
        <NavBar authToken={authToken} setIsLoggedIn={null} />
        <br />

        {authToken ? (
            <>
            <UserProfile />
            </>

        ) : (
            <p dir='rtl' style={{ textAlign: 'center' }}>זהו תוכן למשתמשים רשומים בלבד!</p>
        )}
        </>
    </div>

);
}
  
  export default ProfilePage;
    
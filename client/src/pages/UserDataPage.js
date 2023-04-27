import React from 'react';
import NavBar from '../common/components/NavBar';
// import DisplayQueryResults from '../common/components/UserData';
import DisplayTourResults from '../common/components/TourView';

function UserDataPage() {
  const authToken = localStorage.getItem('token');

  return (
    <div className="user-form-container">
      <>
        <NavBar authToken={authToken} setIsLoggedIn={null} />
        <br />
        {authToken ? (
          <DisplayTourResults />
        ) : (
          <p dir='rtl' style={{ textAlign: 'center' }}>זהו תוכן למשתמשים רשומים בלבד!</p>
          )}
      </>
    </div>
  );
}

export default UserDataPage;

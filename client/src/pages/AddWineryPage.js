import React, { useState } from 'react';
import NavBar from '../common/components/NavBar';
// import AddWinery from '../common/components/AddWinery';
import { AddWinery } from '../common/components/AddWinery';


function AddWineryPage() {
  const authToken = localStorage.getItem('token');

  return (
    <div className="user-form-container">
    <>
      <NavBar authToken={authToken} setIsLoggedIn={null} />
      <br />
      {authToken ? (
        <>
        <AddWinery />
        </>

      ) : (
        <p dir='rtl' style={{ textAlign: 'center' }}>זהו תוכן למשתמשים רשומים בלבד!</p>
      )}
    </>
    </div>
  );
}

export default AddWineryPage;



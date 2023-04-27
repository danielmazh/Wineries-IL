import React, { useState } from 'react';
import NavBar from '../common/components/NavBar';
import QuestionnaireForm from '../common/components/QuestionnaireForm';
import '../styles/QuestionnaireForm.css';

function PersonalZonePage() {
  const authToken = localStorage.getItem('token');

  return (
    <div className="user-form-container">
    <>
      <NavBar authToken={authToken} setIsLoggedIn={null} />
      <br />
      {authToken ? (
        <>
        <QuestionnaireForm />
        </>

      ) : (
        <p dir='rtl' style={{ textAlign: 'center' }}>זהו תוכן למשתמשים רשומים בלבד!</p>
      )}
    </>
    </div>
  );
}

export default PersonalZonePage;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/login/SignUpPage';
import LogInPage from '../pages/login/LogInPage';
import PersonalZonePage from '../pages/PersonalZonePage';
import UserDataPage from '../pages/UserDataPage';
import AddWineryPage from '../pages/AddWineryPage';
import ProfilePage from '../pages/ProfilePage';
import EmailVerificationPage from '../pages/EmailVerificationPage';
import SurveyPage from '../pages/SurveyPage';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/PersonalZone/:token" element={<PersonalZonePage />} />
        <Route path="/userdata" element={<UserDataPage />} />
        <Route path="/addwinery" element={<AddWineryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/verify-email/:token" element={<EmailVerificationPage />} /> 
        <Route exact path="/survey" element={<SurveyPage />} />

        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

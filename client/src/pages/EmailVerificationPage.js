import React from 'react';
import EmailVerification from '../common/components/EmailVerification';


function EmailVerificationPage() {
  const authToken = localStorage.getItem('token');
  return (
    <div>
      <EmailVerification />
    </div>
  );
}

export default EmailVerificationPage;


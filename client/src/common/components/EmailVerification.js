import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EmailVerification() {
  const [message, setMessage] = useState('');
  const token = useParams().token;

  useEffect(() => {
    fetch(`/api/verify-email/${token}`)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('404');
        }
      })
      .then((text) => {
        setMessage(text);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{message}</h1>
    </div>
  );
}

export default EmailVerification;

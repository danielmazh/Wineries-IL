import React from 'react';

const PasswordStrengthBar = ({ password }) => {
  const getStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    return strength;
  };

  const strength = getStrength(password);
  const progressBarColors = ['#52BE80', '#27AE60', '#229954', '#1E8449', '#196F3D'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
      {[1, 2, 3, 4, 5].map((val, index) => (
        <div
          key={index}
          style={{
            width: '20%',
            height: '5px',
            backgroundColor: strength >= val ? progressBarColors[val - 1] : '#DDD',
          }}
        />
      ))}
    </div>
  );
};

export default PasswordStrengthBar;


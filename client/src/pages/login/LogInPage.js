import React, { useState } from 'react';
import NavBar from '../../common/components/NavBar';
import LogIn from '../../common/components/LogIn';

function LogInPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <LogIn setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default LogInPage;


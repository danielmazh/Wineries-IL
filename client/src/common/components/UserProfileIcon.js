// import React from 'react';

// function UserProfileIcon({ profilePictureUrl }) {
//   if (profilePictureUrl && profilePictureUrl !== 'null') {
//     return (
//       <img
//         src={`${process.env.REACT_APP_API_URL}${profilePictureUrl}`}
//         alt="User profile"
//         className="user-profile-icon"
//       />
//     );
//   }

//   return (
//     <svg
//       className="user-profile-icon"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
//     </svg>
//   );
// }

// export default UserProfileIcon;





import React from 'react';

function UserProfileIcon({ profilePictureUrl }) {
  if (profilePictureUrl && profilePictureUrl !== 'null') {
    return (
      <img
        src={profilePictureUrl}
        alt="User profile"
        className="user-profile-icon"
      />
      
    );
  }

  return (
    <svg
      className="user-profile-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  );
}

export default UserProfileIcon;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './UserProfile.css';



// const UserProfile = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const [profilePictureUrl, setProfilePictureUrl] = useState(null);

//   const fetchProfilePictureUrl = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('/api/getProfilePictureUrl', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProfilePictureUrl(response.data.url);
//     } catch (error) {
//       console.error(error);
//     }
//   };  

//   useEffect(() => {
//     const fetchProfilePictureUrl = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/getProfilePictureUrl', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfilePictureUrl(response.data.url);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProfilePictureUrl();
//   }, []);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setMessage('יש לבחור קובץ');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('profilePicture', selectedFile);

//     const authToken = localStorage.getItem('token');
//     const headers = {
//       'Content-Type': 'multipart/form-data',
//       'Authorization': `Bearer ${authToken}`,
//     };

//     try {
//       await axios.post('/api/uploadProfilePicture', formData, { headers });
//       setMessage('הקובץ הועלה בהצלחה');
//       await fetchProfilePictureUrl();
//     } catch (error) {
//       setMessage('שגיאה בהעלאת הקובץ');
//     }
//   };

//   return (
//     <div className="user-profile-container">
//       <h1>העלאת תמונת פרופיל</h1>
//       {profilePictureUrl && <img src={profilePictureUrl} alt="Profile" className="profile-picture" />}
//       <input type="file" id="file" onChange={handleFileChange} className="file-input" />
//       <label htmlFor="file">בחירת קובץ</label>
//       <button onClick={handleUpload}>העלאה</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UserProfile;


// import './UserProfile.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

// const UserProfile = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const [profilePictureUrl, setProfilePictureUrl] = useState(null);

//   const fetchProfilePictureUrl = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('/api/getProfilePictureUrl', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProfilePictureUrl(response.data.url);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchProfilePictureUrl();
//   }, []);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setMessage('יש לבחור קובץ');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append('profilePicture', selectedFile);
  
//     const authToken = localStorage.getItem('token');
//     const headers = {
//       'Content-Type': 'multipart/form-data',
//       'Authorization': `Bearer ${authToken}`,
//     };
  
//     try {
//       await axios.post('/api/uploadProfilePicture', formData, { headers });
//       setMessage('הקובץ הועלה בהצלחה');
//       await fetchProfilePictureUrl();
//       setSelectedFile(null); // Reset the selectedFile state after successful upload
  
//       // Refresh the page after successful upload
//       window.location.reload();
//     } catch (error) {
//       setMessage('שגיאה בהעלאת הקובץ');
//     }
//   };



//   // const handleDelete = async () => {
//   //   const authToken = localStorage.getItem('token');
//   //   const headers = {
//   //     'Authorization': `Bearer ${authToken}`,
//   //   };
  
//   //   try {
//   //     await axios.delete('/api/deleteProfilePicture', { headers });
//   //     setMessage('הקובץ נמחק בהצלחה');
//   //     setProfilePictureUrl(null);
//   //   } catch (error) {
//   //     setMessage('שגיאה במחיקת הקובץ');
//   //   }
//   // };
  
  
  

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 2,
//         mt: '10%', // add margin-top of 2 units
//       }}
//     >

//       <h1>העלאת תמונת פרופיל</h1>
//       {profilePictureUrl && (
//         <img
//           src={profilePictureUrl}
//           alt="Profile"
//           style={{ width: '150px', height: '150px', borderRadius: '50%' }}
//         />
//       )}
//       <Stack direction="row" alignItems="center" spacing={2}>
//         <IconButton
//           color="primary"
//           aria-label="upload picture"
//           component="label"
//         >
//           <input
//             hidden
//             accept="image/*"
//             type="file"
//             onChange={handleFileChange}
//           />
//           <PhotoCamera />
//         </IconButton>
//       </Stack>
//       {selectedFile && (
//         <Box sx={{ width: '150px', height: '150px', overflow: 'hidden', borderRadius: '50%' }}>
//           <img
//             src={URL.createObjectURL(selectedFile)}
//             alt="Preview"
//             style={{ width: '100%', height: 'auto' }}
//           />
//         </Box>
//       )}
//       <Button variant="contained" onClick={handleUpload}>
//         העלאה
//       </Button>
//       {message && <p>{message}</p>}
//     </Box>
//   );
// };

// export default UserProfile;







import './UserProfile.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import UserProfileIcon from '../UserProfileIcon';

const UserProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  const fetchProfilePictureUrl = async () => {
    console.log('calling API -- line 241:');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/getProfilePictureUrl', {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log('END of calling API -- line 249:');

      setProfilePictureUrl(response.data.url);

      console.log('Fetched profilePictureUrl -- line 247:', response.data.url);
      
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchProfilePictureUrl();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('יש לבחור קובץ');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', selectedFile);

    const authToken = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authToken}`,
    };

    try {
      await axios.post('/api/uploadProfilePicture', formData, { headers });
      setMessage('הקובץ הועלה בהצלחה');
      await fetchProfilePictureUrl();
      setSelectedFile(null); // Reset the selectedFile state after successful upload

      // Refresh the page after successful upload
      window.location.reload();
    } catch (error) {
      setMessage('שגיאה בהעלאת הקובץ');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        mt: '10%', // add margin-top of 2 units
      }}
    >
      <h1>העלאת תמונת פרופיל</h1>
      {profilePictureUrl && (
        <UserProfileIcon profilePictureUrl={profilePictureUrl} />
      )}
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileChange}
          />
          <PhotoCamera />
        </IconButton>
      </Stack>
      {selectedFile && (
              <Box sx={{ width: '150px', height: '150px', overflow: 'hidden', borderRadius: '50%' }}>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          )}
          <Button variant="contained" onClick={handleUpload}>
            העלאה
          </Button>
          {message && <p>{message}</p>}
          </Box>
  );
};

export default UserProfile;
      

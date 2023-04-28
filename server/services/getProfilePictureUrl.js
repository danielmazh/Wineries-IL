// const express = require('express');
// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();

// router.get('/getProfilePictureUrl', (req, res) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).send('No authorization header provided');
//   }

//   const token = authHeader.split(' ')[1];
//   let decodedToken;

//   try {
//     decodedToken = jwt.verify(token, JWT_SECRET);
//   } catch (err) {
//     return res.status(401).send('Invalid token');
//   }

//   const userId = decodedToken.userId;

//   const profilePicturePath = path.join(__dirname, '../../client/src/assets/profile/userProfile');
//   const profilePictureFilename = `profilePicture-${userId}.png`; // Assuming the uploaded image is always a PNG file.
//   const profilePictureFilePath = path.join(profilePicturePath, profilePictureFilename);

//   // Check if the profile picture file exists
//   fs.access(profilePictureFilePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       // File does not exist
//       return res.json({ url: null });
//     } else {
//       // File exists
//       const profilePictureUrl = `/userProfile/${profilePictureFilename}`;
//       res.json({ url: profilePictureUrl });
//     }
//   });
// });

// module.exports = router;









// CURRENT WORKING VERSION

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();

// router.get('/getProfilePictureUrl', (req, res) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).send('No authorization header provided');
//   }

//   const token = authHeader.split(' ')[1];
//   let decodedToken;

//   try {
//     decodedToken = jwt.verify(token, JWT_SECRET);
//   } catch (err) {
//     return res.status(401).send('Invalid token');
//   }

//   const userId = decodedToken.userId;
//   const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif']; // Add more extensions if needed
//   const profilePicturePath = path.join(__dirname, '../../client/src/assets/profile/userProfile');

//   // Find the first matching file with an allowed extension
//   const findProfilePicture = (extensions) => {
//     if (extensions.length === 0) {
//       return res.json({ url: null });
//     }

//     const currentExtension = extensions[0];
//     const profilePictureFilename = `profilePicture-${userId}${currentExtension}`;
//     const profilePictureFilePath = path.join(profilePicturePath, profilePictureFilename);

//     fs.access(profilePictureFilePath, fs.constants.F_OK, (err) => {
//       if (err) {
//         // File does not exist, try the next extension
//         findProfilePicture(extensions.slice(1));
//       } else {
//         // File exists
//         const profilePictureUrl = `/userProfile/${profilePictureFilename}`;
//         res.json({ url: profilePictureUrl });
//       }
//     });
//   };

//   findProfilePicture(allowedExtensions);
// });

// module.exports = router;









// *********************************************************************************************************************

const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, AWS, AWS_S3_BUCKET_NAME } = require('../config');
const path = require('path');
const fs = require('fs');

const S3 = new AWS.S3();
const router = express.Router();

router.get('/getProfilePictureUrl', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send('No authorization header provided');
  }

  const token = authHeader.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(401).send('Invalid token');
  }

  const userId = decodedToken.userId;
  console.log('User ID: -- line 147', userId);

  const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif']; // Add more extensions if needed
  

  // Find the first matching file with an allowed extension
  const findProfilePicture = (extensions) => {
    if (extensions.length === 0) {
      return res.json({ url: null });
    }


    const currentExtension = extensions[0];
    // const profilePictureFilename = `profilePicture-${userId}${currentExtension}`;
    const profilePictureFilename = `UserProfileIcon/profilePicture-${userId}${currentExtension}`;


    const params = {
      Bucket: AWS_S3_BUCKET_NAME,
      Key: profilePictureFilename,
    };

    // Check if the file exists in the S3 bucket
    S3.headObject(params, (err) => {
      if (err) {
        console.log('S3 headObject error:', err);
        console.log('File does not exist -- line 169');

        // console.log('File does not exist -- line 169'  )

        // File does not exist, try the next extension
        findProfilePicture(extensions.slice(1));
      } else {

        console.log('File exist -- line 175'  )

        // File exists, generate a signed URL
        const signedUrlExpireSeconds = 60 * 5; // Set the URL to expire in 5 minutes
        const profilePictureUrl = S3.getSignedUrl('getObject', {
          ...params,
          Expires: signedUrlExpireSeconds,
        });

        console.log('returned url: "profilePictureUrl" -- line 184', profilePictureUrl )

        res.json({ url: profilePictureUrl });

          }
        });

      };

  findProfilePicture(allowedExtensions);

  }); 

module.exports = router;

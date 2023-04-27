// const multer = require('multer');
// const path = require('path');
// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       // cb(null, path.join(__dirname, '../client/src/assets/profile/userProfile'));
//       cb(null, path.join(__dirname, '../../client/src/assets/profile/userProfile'));

//     },
//     filename: (req, file, cb) => {
//       const authHeader = req.headers.authorization;
//       if (!authHeader) {
//         return cb(new Error('No authorization header provided'));
//       }
  
//       const token = authHeader.split(' ')[1];
//       let decodedToken;
  
//       try {
//         decodedToken = jwt.verify(token, JWT_SECRET);
//         console.log('Decoded token:', decodedToken); 
//       } catch (err) {
//         return cb(new Error('Invalid token'));
//       }
  
//       const userId = decodedToken.userId;
//       cb(null, `profilePicture-${userId}${path.extname(file.originalname)}`);
//     },
//   });

// const upload = multer({ storage });

// function uploadProfilePicture(req, res, next) {
//   const uploader = upload.single('profilePicture');

//   uploader(req, res, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error uploading file');
//     }

//     res.status(200).send('File uploaded successfully');
//   });
// }

// module.exports = {
//   uploadProfilePicture,
// };








const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, AWS } = require('../config');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const s3 = new AWS.S3();

const storage = multer.memoryStorage(); // Use memory storage instead of disk storage

const upload = multer({ storage });

function uploadProfilePicture(req, res, next) {
  const uploader = upload.single('profilePicture');

  uploader(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error uploading file');
    }

    // After multer has processed the file, upload it to S3
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(403).send('No authorization header provided');
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;

    try {
      decodedToken = jwt.verify(token, JWT_SECRET);
      console.log('Decoded token:', decodedToken);
    } catch (err) {
      return res.status(403).send('Invalid token');
    }

    const userId = decodedToken.userId;
    // const key = `profilePicture-${userId}${path.extname(req.file.originalname)}`;
    const key = `UserProfileIcon/profilePicture-${userId}${path.extname(req.file.originalname)}`;


    // const params = {
    //   Bucket: process.env.AWS_S3_BUCKET_NAME, // Your S3 bucket name
    //   Key: key,
    //   Body: req.file.buffer,
    //   ContentType: req.file.mimetype,
    //   ACL: 'public-read' // Set the file to be publicly accessible
    // };

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME, // Your S3 bucket name
      Key: key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype
    };


    s3.upload(params, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error uploading file to S3');
      }

      console.log('S3 file URL:', data.Location);
      res.status(200).send('File uploaded successfully to S3');
    });
  });
}

module.exports = {
  uploadProfilePicture
};

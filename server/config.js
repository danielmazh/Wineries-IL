const dotenv = require('dotenv');
const AWS = require('aws-sdk');

dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: 'v4' 
});

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  // siteUrl: "http://localhost:3000",
  siteUrl: "https://www.wineries-il.co.il",

  AWS, // Export the AWS object
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME, // Add this line to export the S3 bucket name
};








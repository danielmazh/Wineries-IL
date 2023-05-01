// // server\routers\AppRoutes.js
// const express = require("express");
// const signUpView = require("../views/SignUp");
// const loginView = require("../views/LogIn");
// const logoutView = require("../views/Logout");
// const UserDataView = require("../views/UserData");
// const getUserDataView = require("../views/UserData");
// const addWineryView = require('../views/WineryAdd');
// const verifyEmailController = require('../views/VerifyEmail');
// const {  upload,} = require('../views/WineryAdd');
// const uploadProfilePictureView = require('../views/UploadProfilePicture');
// const getProfilePictureUrl = require('../services/getProfilePictureUrl'); // Import getProfilePictureUrl function
// const jwt = require('jsonwebtoken');
// const router = express.Router();



// router.post("/signup", signUpView.signUp);
// router.post("/login", loginView.loginUser);
// router.post("/logout", logoutView.logoutUser);
// router.post("/userdata", UserDataView.userData);
// router.get("/getUserdata", getUserDataView.getUserData);
// router.post("/addWinery", addWineryView.addWinery);
// router.post('/addWinery/:wineryID', upload.single('wineryLogo'), addWineryView.uploadWineryLogo);
// router.post('/uploadProfilePicture', uploadProfilePictureView.uploadProfilePicture);
// router.get('/verify-email/:token', verifyEmailController.verifyEmail);

// module.exports = router;








// server\routers\AppRoutes.js
const express = require("express");
const signUpView = require("../views/SignUp");
const loginView = require("../views/LogIn");
const logoutView = require("../views/Logout");
const UserDataView = require("../views/UserData");
const getUserDataView = require("../views/UserData");
const addWineryView = require('../views/WineryAdd');
const verifyEmailController = require('../views/VerifyEmail');
const uploadProfilePictureView = require('../views/UploadProfilePicture');
const getProfilePictureUrl = require('../services/getProfilePictureUrl'); // Import getProfilePictureUrl function
const logger = require('../../logger');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { upload } = require('../views/WineryAdd');
const supportedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

// Middleware to log incoming requests
router.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`, { ip: req.ip });
  next();
});

router.post("/signup", signUpView.signUp);
router.post("/login", loginView.loginUser);
router.post("/logout", logoutView.logoutUser);
router.post("/userdata", UserDataView.userData);
router.get("/getUserdata", getUserDataView.getUserData);
router.post("/addWinery", addWineryView.addWinery);
router.post('/addWinery/:wineryID', upload.single('wineryLogo'), addWineryView.uploadWineryLogo);
router.post('/uploadProfilePicture', uploadProfilePictureView.uploadProfilePicture);
router.get('/verify-email/:token', verifyEmailController.verifyEmail);

// Middleware to log outgoing responses
router.use((req, res, next) => {
  res.on('finish', () => {
    logger.info(`${req.method} ${req.url} ${res.statusCode}`, { ip: req.ip });
  });
  next();
});

module.exports = router;


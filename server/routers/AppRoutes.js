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
// router.get("/getUserdata", getUserData);

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
const { getUserData } = require("../views/UserData");
const addWineryView = require('../views/WineryAdd');
const verifyEmailController = require('../views/VerifyEmail');
const { upload, } = require('../views/WineryAdd');
const uploadProfilePictureView = require('../views/UploadProfilePicture');
const getProfilePictureUrl = require('../services/getProfilePictureUrl');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post("/signup", signUpView.signUp);
router.post("/login", loginView.loginUser);
router.post("/logout", logoutView.logoutUser);
router.post("/userdata", UserDataView.userData);
router.get("/getUserdata", (req, res) => {
  console.log("Request received for /api/getUserdata");
  getUserData(req, res);
});
router.post("/addWinery", addWineryView.addWinery);
router.post('/addWinery/:wineryID', upload.single('wineryLogo'), addWineryView.uploadWineryLogo);
router.post('/uploadProfilePicture', uploadProfilePictureView.uploadProfilePicture);
router.get('/verify-email/:token', verifyEmailController.verifyEmail);

module.exports = router;








